# 배포 패키지 — 울산대학교 입시통계 포털 랜딩 (UOU 디자인 시스템 리디자인)

## 개요
기존 입시통계 포털(`ukey1358-cmyk.github.io/uou-admissions-stats`)의 **랜딩 페이지(index)** 를
UOU 공식 디자인 시스템에 맞춰 리디자인한 버전입니다. 구조·콘텐츠는 원본과 동일하고, 비주얼만
브랜드 토큰(그린 강조·Pretendard·시스템 카드/버튼/배지)과 공식 로고로 교체했습니다.

이 페이지는 **순수 정적 HTML**이라 재구현이 필요 없습니다. 파일을 저장소에 넣고 푸시하면 바로 배포됩니다.

## 이 패키지의 파일
- `admissions-portal.html` — **자가완결 단일 파일**. CSS·이미지·폰트가 전부 인라인되어 있어
  어떤 경로에 두어도(혹은 더블클릭만으로도) 동작합니다. 외부 의존성 없음(인터넷 불필요).

---

## 배포 방법 (Claude Code 작업 지시)

대상 저장소: **`ukey1358-cmyk/uou-admissions-stats`** (GitHub Pages, `site/` 폴더가 공개 루트)

### 옵션 1 — 신규 페이지로 추가 (안전, 권장)
기존 `index.html`을 건드리지 않고 새 URL로 추가합니다.

```bash
git clone https://github.com/ukey1358-cmyk/uou-admissions-stats.git
cd uou-admissions-stats

# 이 패키지의 단일 파일을 site/ 에 복사
cp /path/to/admissions-portal.html site/index-v2.html

git add site/index-v2.html
git commit -m "Add UOU design-system redesign of admissions landing (v2)"
git push origin main
```
→ 게시 URL: `https://ukey1358-cmyk.github.io/uou-admissions-stats/site/index-v2.html`

### 옵션 2 — 기존 랜딩 교체
새 디자인으로 메인 랜딩을 대체합니다. (기존 파일은 백업)

```bash
cd uou-admissions-stats
cp site/index.html site/index.legacy.html          # 기존 백업
cp /path/to/admissions-portal.html site/index.html # 교체
git add site/index.html site/index.legacy.html
git commit -m "Redesign admissions landing with UOU design system"
git push origin main
```
→ 게시 URL: `https://ukey1358-cmyk.github.io/uou-admissions-stats/site/index.html`

GitHub Pages는 push 후 1~2분 내 자동 반영됩니다(Settings → Pages 활성 상태 가정).

---

## ⚠️ 배포 전 확인할 것 — KPI 실데이터 연결

이 리디자인의 상단 KPI 4종(모집인원·총지원자·평균경쟁률·최고경쟁률 모집단위) 수치는
**디자인 시안용 예시값**입니다(`1,842명`, `14,206명`, `7.71:1`, `의예과 38.40:1`).

원본 `index.html`은 이 값들을 `../data/2026/index.json` → `T002` 표에서 **JS로 자동 로드**합니다.
실서비스로 쓰려면 원본의 KPI fetch 스크립트를 이 파일에 다시 붙여야 합니다:

1. 원본 `site/index.html` 하단의 `<script>(async () => { … fetch('../data/2026/index.json') … })()</script>` 블록을 그대로 복사
2. 이 파일의 KPI 마크업에 원본과 동일한 id를 부여:
   - 모집인원 값 `<div>` → `id="kpi-capacity"`
   - 총지원자 값 → `id="kpi-applicants"`
   - 평균경쟁률 값 → `id="kpi-rate"`
   - 최고경쟁률 모집단위 값 → `id="kpi-top"`, 그 아래 경쟁률 → `id="kpi-top-rate"`
   - 각 값 `<div>`에 `class="value is-loading"`, 초기 텍스트 `—`
3. 그러면 기존 데이터 파이프라인(`scripts/build_all.py` 산출물)을 그대로 재사용합니다.

> 예시값인 채로 옵션 1(별도 URL)에 올려 시안 공유용으로만 쓰는 것도 가능합니다.

---

## 디자인 토큰 요약 (이미 파일에 인라인됨)
- **주색** UOU Green `#009A44` (강조·버튼·링크·KPI 수치) / hover `#00873B` / 딥그린 밴드 `#006E30`
- **본문** `#333333`, **제목** `#1C1E20`, **보조** `#71767B`
- **악센트** Yellow `#CC9900` (딥그린 밴드 상단 4px 라인)
- **폰트** Pretendard (인라인)
- **radius** 버튼/카드 8·12px, **그림자** `0 2px 8px rgba(0,0,0,.08)`
- **아이콘** Lucide (bar-chart-3, table-2, arrow-up-down, target, book-open, graduation-cap, file-text, info)
- **로고** 공식 UOU 로고마크(헤더)·심볼마크 기린 휘장(히어로)·아웃라인 로고마크(푸터)

## 원본 출처
- 라이브: https://ukey1358-cmyk.github.io/uou-admissions-stats/site/index.html
- 저장소: https://github.com/ukey1358-cmyk/uou-admissions-stats (`site/index.html`)
