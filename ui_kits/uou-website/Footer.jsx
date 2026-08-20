/* global React, Wordmark, Icon */
// Footer — UOU Gray background, optional 4px green top line. §5.5.
function SiteFooter() {
  const cols = [
    { h: "바로가기", links: ["대학 홈페이지", "학사정보시스템", "도서관", "포털"] },
    { h: "정보공개", links: ["대학정보공시", "규정집", "감사실", "개인정보처리방침"] },
    { h: "패밀리사이트", links: ["부속병원", "산학협력단", "평생교육원", "박물관"] },
  ];
  return (
    <footer style={{ marginTop: 96, background: "var(--gray-800)", color: "var(--gray-200)" }}>
      <div style={{ height: 4, background: "var(--green-500)" }} />
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "48px 24px 40px",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1fr 1fr",
          gap: 40,
        }}
      >
        <div>
          <Wordmark color="#fff" sub="var(--gray-400)" />
          <p style={{ fontSize: 13, lineHeight: "22px", color: "var(--gray-400)", margin: "20px 0 0" }}>
            (44610) 울산광역시 남구 대학로 93 (무거동)<br />
            대표전화 052-259-1234<br />
            대외홍보팀 052-259-2627
          </p>
        </div>
        {cols.map((col) => (
          <div key={col.h}>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#fff", marginBottom: 16 }}>{col.h}</div>
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              {col.links.map((l) => (
                <li key={l}>
                  <a href="#" style={{ fontSize: 13, color: "var(--gray-400)", textDecoration: "none" }}>{l}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div
          style={{
            maxWidth: "var(--container-max)",
            margin: "0 auto",
            padding: "18px 24px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: 12,
          }}
        >
          <span style={{ fontSize: 12, color: "var(--gray-500)" }}>
            © 2026 University of Ulsan. 학교법인 울산공업학원. All rights reserved.
          </span>
          <div style={{ display: "flex", gap: 14, color: "var(--gray-400)" }}>
            <Icon name="instagram" size={18} />
            <Icon name="youtube" size={18} />
            <Icon name="facebook" size={18} />
          </div>
        </div>
      </div>
    </footer>
  );
}

window.SiteFooter = SiteFooter;
