/* global React, Wordmark, Icon */
// Top utility bar + Global navigation (GNB) — §5.4.
function TopBar() {
  const utils = ["통합검색", "구성원", "Quick Menu", "ENGLISH", "로그인"];
  return (
    <div style={{ background: "var(--gray-50)", borderBottom: "1px solid var(--gray-100)" }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          height: 36,
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-end",
          gap: 18,
        }}
      >
        {utils.map((u, i) => (
          <a
            key={u}
            href="#"
            style={{
              fontSize: 12,
              color: "var(--gray-600)",
              textDecoration: "none",
              fontWeight: i === 4 ? 700 : 400,
            }}
          >
            {u}
          </a>
        ))}
      </div>
    </div>
  );
}

function Gnb() {
  const menus = ["대학소개", "입학", "학사", "대학·대학원", "연구·산학", "캠퍼스 라이프"];
  const [active, setActive] = React.useState(1);
  return (
    <header style={{ background: "var(--gray-0)", borderBottom: "1px solid var(--gray-100)", position: "sticky", top: 0, zIndex: 20 }}>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "0 24px",
          height: 72,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Wordmark />
        <nav style={{ display: "flex", alignItems: "stretch", height: "100%", gap: 4 }}>
          {menus.map((m, i) => {
            const on = i === active;
            return (
              <button
                key={m}
                onClick={() => setActive(i)}
                style={{
                  appearance: "none",
                  background: "none",
                  border: "none",
                  padding: "0 16px",
                  height: "100%",
                  fontFamily: "var(--font-sans)",
                  fontSize: 16,
                  fontWeight: 500,
                  color: on ? "var(--green-500)" : "var(--gray-800)",
                  borderBottom: on ? "2px solid var(--green-500)" : "2px solid transparent",
                  cursor: "pointer",
                  whiteSpace: "nowrap",
                }}
              >
                {m}
              </button>
            );
          })}
        </nav>
        <button
          aria-label="전체메뉴"
          style={{ appearance: "none", background: "none", border: "none", cursor: "pointer", color: "var(--gray-800)", display: "flex" }}
        >
          <Icon name="menu" size={24} />
        </button>
      </div>
    </header>
  );
}

window.TopBar = TopBar;
window.Gnb = Gnb;
