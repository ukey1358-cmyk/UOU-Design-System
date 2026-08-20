"""
5단계: Gradio 챗봇 (UOU 디자인 재설계 — 사이드바 + 상단바 레이아웃).
- numpy 인덱스(embeddings.npy + meta.jsonl)에서 Top-K 조항 검색
- Gemini API 로 출처 포함 답변 생성
- gr.Blocks 로 사이드바/상단바/대화/입력부를 직접 구성하고 커스텀 CSS 적용

* 이 파일은 기존 src/app.py 를 그대로 대체합니다. (검색·Gemini 백엔드 함수는 동일)
* 같은 폴더(src/)에 assets/logomark-solid.png 를 넣어 주세요.
"""
from __future__ import annotations

import json
import textwrap
from functools import lru_cache
from pathlib import Path

import gradio as gr
import numpy as np

from config import (
    CHROMA_DIR,
    EMBEDDING_MODEL,
    GEMINI_API_KEY,
    GEMINI_MODEL,
    TOP_K,
)

INDEX_DIR = CHROMA_DIR.parent / "index"
EMB_PATH = INDEX_DIR / "embeddings.npy"
META_PATH = INDEX_DIR / "meta.jsonl"

HERE = Path(__file__).resolve().parent
LOGO_PATH = HERE / "assets" / "logomark-solid.png"


SYSTEM_PROMPT = textwrap.dedent("""\
    당신은 울산대학교 인사행정 규정 안내 챗봇입니다.

    [규칙]
    1. 아래 [근거]에 제시된 규정 내용만을 바탕으로 답변하세요.
    2. 답변 범위는 인사행정(임용·보수·복무·평가·승진·윤리 등)에 한정합니다.
       학사·학생·교무·부속기관 등 범위 밖 질문에는
       "인사행정 규정 외의 사항은 답변 범위가 아닙니다." 라고만 안내하세요.
    3. 질문이 교원·일반직원·조교·강사·의과대학 등 어느 대상에 해당하는지 모호하면
       먼저 한 문장으로 되묻고 멈추세요.
    4. 답변 끝에는 반드시 "[규정명 제○조]" 형식으로 인용하고 가능한 경우 원문 URL 도 표시하세요.
    5. 근거에 명확히 적혀 있지 않은 내용은
       "해당 사항은 현재 규정에서 확인되지 않습니다." 라고 답하세요.
    6. 시행일자가 명시되어 있으면 "(시행일: YYYY.MM.DD)" 형식으로 함께 표기하세요.
""")


# ─────────────────────────────────────────────────────────────────────────────
#  백엔드 (검색 + Gemini) — 기존과 동일
# ─────────────────────────────────────────────────────────────────────────────
@lru_cache(maxsize=1)
def load_index() -> tuple[np.ndarray, list[dict]]:
    if not EMB_PATH.exists() or not META_PATH.exists():
        raise FileNotFoundError(
            f"인덱스 없음: {EMB_PATH} / {META_PATH}. 먼저 step1~step4 실행."
        )
    embs = np.load(EMB_PATH)
    metas: list[dict] = []
    with META_PATH.open(encoding="utf-8") as f:
        for line in f:
            metas.append(json.loads(line))
    if len(embs) != len(metas):
        raise RuntimeError(
            f"인덱스 손상: embeddings={len(embs)} vs meta={len(metas)}"
        )
    return embs, metas


@lru_cache(maxsize=1)
def get_encoder():
    from sentence_transformers import SentenceTransformer
    return SentenceTransformer(EMBEDDING_MODEL)


def search(query: str, top_k: int, target_filter: str | None) -> list[dict]:
    embs, metas = load_index()
    q = get_encoder().encode(
        [query], normalize_embeddings=True, convert_to_numpy=True
    )[0].astype(np.float32)
    sims = embs @ q  # 정규화돼 있으므로 dot = cosine
    order = np.argsort(-sims)

    hits: list[dict] = []
    for idx in order:
        m = metas[idx]
        if target_filter and target_filter != "전체":
            if m.get("대상자") != target_filter:
                continue
        hits.append({**m, "score": float(sims[idx])})
        if len(hits) >= top_k:
            break
    return hits


def format_context(hits: list[dict]) -> tuple[str, list[dict]]:
    lines = []
    for i, m in enumerate(hits, 1):
        lines.append(
            f"[근거{i}] {m['규정명']} {m['조']}"
            + (f" ({m['조제목']})" if m.get("조제목") else "")
            + (f" / 대상자:{m['대상자']}" if m.get("대상자") else "")
            + (f" / 시행일자:{m['시행일자']}" if m.get("시행일자") else "")
        )
        lines.append(m["본문"].strip())
        lines.append("")
    return "\n".join(lines), hits


def call_gemini(system_prompt: str, user_prompt: str) -> str:
    key = (GEMINI_API_KEY or "").strip()
    if not key or key in {"your_gemini_api_key_here", "YOUR_API_KEY"}:
        return (
            "[Gemini API 키 미설정] `.env` 파일의 `GEMINI_API_KEY` 값을 본인 키로 바꾼 뒤 "
            "터미널에서 Ctrl+C 후 `.\\.venv\\Scripts\\python.exe app.py` 로 재시작하세요.\n"
            "키 발급: https://aistudio.google.com/app/apikey"
        )
    from google import genai
    from google.genai import types

    client = genai.Client(api_key=key)
    resp = client.models.generate_content(
        model=GEMINI_MODEL,
        contents=user_prompt,
        config=types.GenerateContentConfig(system_instruction=system_prompt),
    )
    return resp.text or "(응답 없음)"


def answer(question: str, target_filter: str) -> str:
    if not question.strip():
        return "질문을 입력하세요."

    try:
        hits = search(question, TOP_K, target_filter)
    except FileNotFoundError as e:
        return f"[인덱스 오류] {e}"
    except Exception as e:
        return f"[검색 오류] {e!r}"

    if not hits:
        return "관련 조항을 찾지 못했습니다. 질문을 다시 표현해 보세요."

    context, sources = format_context(hits)
    user_prompt = f"[근거]\n{context}\n\n[질문]\n{question}"
    try:
        response = call_gemini(SYSTEM_PROMPT, user_prompt)
    except Exception as e:
        return (
            f"[Gemini 호출 실패] {type(e).__name__}: {e}\n\n"
            "확인 사항:\n"
            "1) `.env` 의 GEMINI_API_KEY 값이 실제 키인지 (예: AIzaSy... 로 시작)\n"
            "2) `.env` 의 GEMINI_MODEL 이 사용 가능한 모델인지 (기본: gemini-2.5-flash)\n"
            "3) AI Studio 무료 등급 분당 요청 한도 초과 여부 (잠시 후 재시도)"
        )

    src_lines = ["", "---", "**참고 조항**"]
    seen = set()
    for s in sources:
        key = (s.get("규정명"), s.get("조"))
        if key in seen:
            continue
        seen.add(key)
        url = s.get("원문URL") or ""
        line = f"- {s['규정명']} {s['조']}"
        if s.get("조제목"):
            line += f" ({s['조제목']})"
        if url:
            line += f" — [원문]({url})"
        src_lines.append(line)
    return response + "\n".join(src_lines)


# ─────────────────────────────────────────────────────────────────────────────
#  UI
# ─────────────────────────────────────────────────────────────────────────────
TARGETS = [
    "전체", "교원", "일반직원", "조교", "강사",
    "비전임 교원", "의과대학", "의과대학 교원", "연구직", "공통",
]

EXAMPLES = [
    "일반직원의 출장 여비 산정 기준은?",
    "조교 임용 기간은 얼마인가요?",
    "행동강령 위반 시 절차는?",
]

RECENT = [
    "교원 연구년 신청 자격",
    "일반직원 출장 여비 기준",
    "조교 임용 기간 문의",
    "행동강령 위반 시 절차",
    "교원 승진 심사 요건",
    "육아휴직 사용 한도",
    "정년 및 명예퇴직 규정",
    "시간강사 보수 지급 기준",
]

HEAD = (
    '<link rel="preconnect" href="https://cdn.jsdelivr.net">'
    '<link rel="stylesheet" '
    'href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.css">'
)

CSS = """
:root{
  --green-50:#E6F5EC; --green-100:#C2E8D2; --green-200:#8FD4AC; --green-300:#5BBF85;
  --green-400:#2EAE64; --green-500:#009A44; --green-600:#00873B; --green-700:#006E30;
  --green-800:#005625; --green-900:#003D1A;
  --gray-0:#FFFFFF; --gray-50:#F7F8F8; --gray-100:#EFF0F1; --gray-200:#DCDEE0;
  --gray-300:#C4C7CB; --gray-400:#9BA0A6; --gray-500:#73787E; --gray-600:#565B61;
  --gray-700:#3F4348; --gray-800:#333333; --gray-900:#1C1E20;
  --uou-font:"Pretendard","Noto Sans KR",-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,sans-serif;
}
/* 전체 폰트·배경 */
.gradio-container, .gradio-container *{font-family:var(--uou-font) !important;}
.gradio-container{max-width:100% !important;padding:0 !important;background:var(--gray-100) !important;}
footer{display:none !important;}
#app{gap:0 !important;height:100vh;flex-wrap:nowrap !important;}

/* ── 사이드바 ── */
#side{background:var(--gray-0);border-right:1px solid var(--gray-200);padding:0 !important;
  min-width:288px !important;max-width:288px !important;display:flex;flex-direction:column;gap:0 !important;height:100vh;}
#brand{padding:22px 22px 18px;border-bottom:1px solid var(--gray-100);}
#brand .b{display:flex;align-items:center;gap:12px;}
#brand img{height:30px;width:auto;display:block;}
#brand .tx{display:flex;flex-direction:column;line-height:1.2;border-left:1px solid var(--gray-200);padding-left:12px;}
#brand .ko{font-size:15px;font-weight:800;color:var(--gray-900);letter-spacing:-.01em;}
#brand .en{font-size:9.5px;font-weight:600;color:var(--gray-400);letter-spacing:.08em;margin-top:2px;}
#newchat{margin:16px 18px 6px !important;min-height:44px !important;height:44px !important;
  background:var(--green-500) !important;color:#fff !important;border:none !important;border-radius:12px !important;
  font-size:14.5px !important;font-weight:700 !important;box-shadow:none !important;}
#newchat:hover{background:var(--green-600) !important;}
#recent{padding:0 !important;}
#recent .sec{padding:14px 18px 8px;font-size:11px;font-weight:700;letter-spacing:.06em;color:var(--gray-400);}
#recent .hist{display:flex;flex-direction:column;gap:2px;padding:0 12px;overflow-y:auto;}
#recent .hist a{display:block;padding:9px 12px;border-radius:8px;font-size:13.5px;color:var(--gray-600);
  text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;}
#recent .hist a:hover{background:var(--gray-50);color:var(--gray-800);}
#recent .hist a.active{background:var(--green-50);color:var(--green-700);font-weight:600;}
#sidefoot{margin-top:auto;padding:14px 18px;border-top:1px solid var(--gray-100);
  display:flex;align-items:center;gap:10px;}
#sidefoot .dot{width:8px;height:8px;border-radius:50%;background:var(--green-500);box-shadow:0 0 0 3px var(--green-50);}
#sidefoot .lbl{font-size:12px;color:var(--gray-500);}
#sidefoot .lbl b{color:var(--gray-700);font-weight:700;}

/* ── 메인 ── */
#main{padding:0 !important;display:flex;flex-direction:column;height:100vh;gap:0 !important;background:var(--gray-50);min-width:0;}
#topbar{flex:none;min-height:60px;background:var(--gray-0);border-bottom:1px solid var(--gray-200);
  display:flex;align-items:center;gap:18px;padding:0 26px !important;}
#topbar .ttl{font-size:16px;font-weight:800;color:var(--gray-900);letter-spacing:-.01em;}
#topbar .meta{font-size:12.5px;color:var(--gray-500);}
#topbar .meta b{color:var(--green-700);font-weight:700;}
#topbar .left{flex:1;display:flex;align-items:baseline;gap:14px;}
/* 대상자 드롭다운 */
#tgt{min-width:190px !important;max-width:220px;}
#tgt label{display:none !important;}
#tgt .wrap, #tgt .secondary-wrap{border-radius:8px !important;}
#tgt input, #tgt .secondary-wrap input{font-size:13px !important;font-weight:600 !important;color:var(--gray-800) !important;}

/* ── 챗봇 ── */
#chat{flex:1 !important;border:none !important;background:transparent !important;overflow-y:auto;padding:10px 0 0 !important;}
#chat .message-wrap{max-width:820px;margin:0 auto;padding:0 26px;}
/* 말풍선 */
#chat .message{font-size:15px !important;line-height:1.7 !important;border-radius:16px !important;
  box-shadow:0 1px 2px rgba(28,30,32,.06) !important;border:1px solid var(--gray-200) !important;}
#chat .message.user{background:var(--green-500) !important;color:#fff !important;
  border:none !important;border-radius:16px 16px 4px 16px !important;}
#chat .message.user *{color:#fff !important;}
#chat .message.bot{background:var(--gray-0) !important;color:var(--gray-800) !important;
  border-radius:4px 16px 16px 16px !important;}
#chat .message.bot a{color:var(--green-600) !important;font-weight:600;}
#chat .message.bot strong{color:var(--gray-900) !important;}
#chat .message.bot hr{border:none;border-top:1px dashed var(--gray-200);margin:14px 0 10px;}
/* 아바타 */
#chat .avatar-container{width:36px !important;height:36px !important;}
#chat .avatar-container img{border-radius:10px !important;background:var(--green-50);padding:5px;
  border:1px solid var(--green-100);}

/* ── 예시 칩 ── */
#chips{max-width:820px;margin:0 auto !important;padding:8px 26px 0 !important;gap:8px !important;
  flex-wrap:wrap !important;background:var(--gray-50);}
#chips button{font-size:12.5px !important;font-weight:600 !important;color:var(--gray-600) !important;
  background:var(--gray-0) !important;border:1px solid var(--gray-200) !important;border-radius:999px !important;
  padding:7px 13px !important;min-height:0 !important;box-shadow:none !important;flex:0 0 auto !important;width:auto !important;}
#chips button:hover{border-color:var(--green-300) !important;color:var(--green-700) !important;background:var(--green-50) !important;}

/* ── 입력부 ── */
#composer{max-width:820px;margin:0 auto !important;padding:10px 26px 8px !important;
  background:var(--gray-50);width:100%;gap:10px !important;align-items:flex-end !important;}
#msg{flex:1;}
#msg textarea{border:1.5px solid var(--gray-200) !important;border-radius:16px !important;
  font-size:15px !important;line-height:1.6 !important;padding:14px 18px !important;
  box-shadow:0 4px 12px rgba(28,30,32,.06) !important;background:var(--gray-0) !important;resize:none;}
#msg textarea:focus{border-color:var(--green-500) !important;box-shadow:0 0 0 4px var(--green-50) !important;}
#msg label{display:none !important;}
#send{flex:none !important;min-width:48px !important;max-width:48px !important;height:48px !important;
  border-radius:12px !important;background:var(--green-500) !important;color:#fff !important;border:none !important;
  font-size:18px !important;padding:0 !important;box-shadow:none !important;}
#send:hover{background:var(--green-600) !important;}
#disc{max-width:820px;margin:0 auto !important;padding:2px 26px 18px !important;background:var(--gray-50);}
#disc p{text-align:center;font-size:11.5px;color:var(--gray-400);margin:0;}
"""

BRAND_HTML = f"""
<div id="brand"><div class="b">
  <img src="/gradio_api/file={LOGO_PATH}" alt="UOU">
  <div class="tx">
    <span class="ko">인사행정 규정 챗봇</span>
    <span class="en">UNIVERSITY OF ULSAN · HR</span>
  </div>
</div></div>
"""

RECENT_HTML = (
    '<div id="recent"><div class="sec">최근 대화</div><nav class="hist">'
    + '<a href="#" class="active">' + RECENT[0] + "</a>"
    + "".join(f'<a href="#">{r}</a>' for r in RECENT[1:])
    + "</nav></div>"
)

FOOT_HTML = (
    '<div id="sidefoot"><span class="dot"></span>'
    '<span class="lbl">규정 <b>49건</b> · 3-2-1 ~ 3-2-64</span></div>'
)

TOPBAR_LEFT = (
    '<div class="left"><span class="ttl">인사행정 규정 안내</span>'
    '<span class="meta">근거 조항 인용 · <b>RAG</b> 기반 답변</span></div>'
)

DISC_HTML = (
    "<p>인사행정(임용·보수·복무·평가·승진·윤리) 범위 내 답변 · "
    "AI 생성 정보는 원문 규정으로 확인하세요.</p>"
)

GREETING = {
    "role": "assistant",
    "content": (
        "안녕하세요. **울산대학교 인사행정 규정 안내 챗봇**입니다.\n\n"
        "임용·보수·복무·평가·승진·윤리 등 인사행정 49개 규정 범위 안에서 "
        "근거 조항과 함께 답변해 드립니다. 우측 상단에서 **대상자**를 선택하면 더 정확합니다."
    ),
}


def respond(message: str, history: list, target: str):
    if not message or not message.strip():
        return "", history
    history = history + [{"role": "user", "content": message}]
    reply = answer(message, target)
    history = history + [{"role": "assistant", "content": reply}]
    return "", history


def build_ui() -> gr.Blocks:
    with gr.Blocks(title="울산대 인사행정 규정 챗봇", css=CSS, head=HEAD,
                   theme=gr.themes.Base()) as demo:
        with gr.Row(elem_id="app"):
            # ── 사이드바 ──
            with gr.Column(elem_id="side"):
                gr.HTML(BRAND_HTML)
                new_btn = gr.Button("＋  새 대화", elem_id="newchat")
                gr.HTML(RECENT_HTML)
                gr.HTML(FOOT_HTML)

            # ── 메인 ──
            with gr.Column(elem_id="main"):
                with gr.Row(elem_id="topbar"):
                    gr.HTML(TOPBAR_LEFT)
                    target = gr.Dropdown(
                        choices=TARGETS, value="전체", show_label=False,
                        container=False, elem_id="tgt",
                    )

                chatbot = gr.Chatbot(
                    value=[GREETING], type="messages", elem_id="chat",
                    show_label=False, show_copy_button=False,
                    avatar_images=(None, str(LOGO_PATH)),
                    height="100%",
                )

                with gr.Row(elem_id="chips"):
                    ex_btns = [gr.Button(q) for q in EXAMPLES]

                with gr.Row(elem_id="composer"):
                    msg = gr.Textbox(
                        placeholder="인사행정 규정에 대해 질문하세요…  "
                                    "(예: 육아휴직은 최대 몇 년까지 가능한가요?)",
                        show_label=False, container=False, lines=1,
                        max_lines=6, elem_id="msg", scale=1,
                    )
                    send = gr.Button("➤", elem_id="send")

                gr.HTML(DISC_HTML, elem_id="disc")

        # ── 이벤트 ──
        send.click(respond, [msg, chatbot, target], [msg, chatbot])
        msg.submit(respond, [msg, chatbot, target], [msg, chatbot])
        new_btn.click(lambda: ("", [GREETING]), None, [msg, chatbot])

        for b, q in zip(ex_btns, EXAMPLES):
            b.click(
                lambda hist, tgt, _q=q: respond(_q, hist, tgt),
                [chatbot, target], [msg, chatbot],
            )

    return demo


def launch():
    import argparse
    import os

    parser = argparse.ArgumentParser()
    parser.add_argument("--share", action="store_true",
                        help="Gradio 임시 공개 URL 생성 (기본 7일 유효)")
    parser.add_argument("--host", default=os.getenv("HOST", "0.0.0.0"))
    parser.add_argument("--port", type=int,
                        default=int(os.getenv("PORT", "7860")))
    args = parser.parse_args()

    share = args.share or os.getenv("GRADIO_SHARE") == "1"
    # 부팅 시 미리 로드해서 첫 질문 응답 지연 줄이기
    try:
        load_index()
        get_encoder()
    except Exception as e:
        print(f"[경고] 사전 로드 실패: {e}")

    demo = build_ui()
    demo.queue().launch(
        server_name=args.host,
        server_port=args.port,
        share=share,
        allowed_paths=[str(HERE / "assets")],
    )


if __name__ == "__main__":
    launch()
