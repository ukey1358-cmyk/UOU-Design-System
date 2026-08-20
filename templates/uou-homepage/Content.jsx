/* global React, Icon */
// Notice board with tabs + list, and a program/news card grid.
function NoticeBoard() {
  const { Tabs, Badge } = window.UOUDesignSystem_08270e;
  const data = {
    notice: [
      { tag: "학사", title: "2026학년도 1학기 수강신청 일정 안내", date: "2026.06.12", isNew: true },
      { tag: "장학", title: "2학기 국가장학금 신청 안내 (1차)", date: "2026.06.10", isNew: true },
      { tag: "일반", title: "여름 계절학기 등록금 납부 기간 공지", date: "2026.06.09" },
      { tag: "행정", title: "교내 통합 정보시스템 정기 점검 안내", date: "2026.06.05" },
    ],
    event: [
      { tag: "행사", title: "제54회 대학 학술제 '진리제' 개최", date: "2026.06.14", isNew: true },
      { tag: "특강", title: "노벨상 수상자 초청 공개 특별강연", date: "2026.06.11" },
      { tag: "문화", title: "벚꽃동산 야외 음악회 — 봄밤의 선율", date: "2026.06.02" },
    ],
    recruit: [
      { tag: "채용", title: "2026년 교직원 신규 임용 공고", date: "2026.06.13", isNew: true },
      { tag: "산학", title: "산학협력단 연구원 모집 (계약직)", date: "2026.06.07" },
    ],
  };
  const [tab, setTab] = React.useState("notice");
  const rows = data[tab];
  return (
    <section style={{ maxWidth: "var(--container-max)", margin: "80px auto 0", padding: "0 24px" }}>
      <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between", marginBottom: 8 }}>
        <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--gray-900)", margin: 0 }}>소식 · 공지</h2>
        <a href="#" style={{ fontSize: 14, fontWeight: 500, color: "var(--green-700)", display: "inline-flex", alignItems: "center", gap: 4 }}>
          전체보기 <Icon name="chevron-right" size={16} />
        </a>
      </div>
      <Tabs
        value={tab}
        onChange={setTab}
        items={[
          { id: "notice", label: "공지사항" },
          { id: "event", label: "행사·특강" },
          { id: "recruit", label: "채용·산학" },
        ]}
      />
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
        {rows.map((r, i) => (
          <li
            key={i}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              padding: "18px 4px",
              borderBottom: "1px solid var(--gray-100)",
              cursor: "pointer",
            }}
          >
            <span style={{ flex: "none", width: 56 }}>
              <Badge variant="info">{r.tag}</Badge>
            </span>
            <span style={{ flex: 1, fontSize: 16, color: "var(--gray-800)", display: "flex", alignItems: "center", gap: 8 }}>
              {r.title}
              {r.isNew && <Badge variant="accent">N</Badge>}
            </span>
            <span style={{ flex: "none", fontSize: 14, color: "var(--gray-500)", fontFamily: "var(--font-mono)" }}>{r.date}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Highlights() {
  const { Card, Badge } = window.UOUDesignSystem_08270e;
  const cards = [
    { tag: "연구", title: "전기차 배터리 연구단, 국제 학술상 수상", desc: "차세대 이차전지 분야 원천기술 성과를 인정받았습니다." },
    { tag: "입학", title: "2027학년도 수시모집 전형 안내", desc: "학생부종합·교과 전형 일정과 모집인원을 확인하세요." },
    { tag: "국제", title: "글로벌 교환학생 파견 프로그램 모집", desc: "30개국 120개 협정 대학으로의 교환·복수학위 기회." },
  ];
  return (
    <section style={{ maxWidth: "var(--container-max)", margin: "72px auto 0", padding: "0 24px" }}>
      <h2 style={{ fontSize: 28, fontWeight: 800, color: "var(--gray-900)", margin: "0 0 24px" }}>주요 소식</h2>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
        {cards.map((c, i) => (
          <Card key={i} interactive>
            <div style={{ marginBottom: 12 }}>
              <Badge>{c.tag}</Badge>
            </div>
            <h4 style={{ fontSize: 20, lineHeight: "28px", fontWeight: 700, color: "var(--gray-900)", margin: "0 0 10px" }}>{c.title}</h4>
            <p style={{ fontSize: 14, lineHeight: "22px", color: "var(--gray-600)", margin: 0 }}>{c.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}

window.NoticeBoard = NoticeBoard;
window.Highlights = Highlights;
