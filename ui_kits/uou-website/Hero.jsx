/* global React, Icon */
// Hero — main visual headline + integrated search. §5.7 input, §5.1 button.
function Hero() {
  const { Button, Input } = window.UOUDesignSystem_08270e;
  return (
    <section
      style={{
        background:
          "linear-gradient(180deg, var(--green-800) 0%, var(--green-700) 100%)",
        color: "#fff",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle sigma watermark */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          right: -40,
          bottom: -80,
          fontSize: 420,
          fontWeight: 800,
          color: "rgba(255,255,255,0.05)",
          lineHeight: 1,
          fontFamily: "var(--font-mono)",
        }}
      >
        Σ
      </div>
      <div
        style={{
          maxWidth: "var(--container-max)",
          margin: "0 auto",
          padding: "72px 24px 64px",
          position: "relative",
        }}
      >
        <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: "0.18em", color: "var(--green-200)", marginBottom: 16 }}>
          진리 · 자주 · 봉사 · SINCE 1970
        </div>
        <h1 style={{ fontSize: 48, lineHeight: "56px", fontWeight: 800, margin: 0, color: "#fff", letterSpacing: "-0.01em", textWrap: "balance" }}>
          미래를 여는 대학,<br />울산대학교
        </h1>
        <p style={{ fontSize: 18, lineHeight: "28px", color: "rgba(255,255,255,0.82)", margin: "20px 0 32px", maxWidth: 520 }}>
          탁월한 인재 양성을 위한 교육과 연구. 신뢰받는 지역 거점 대학으로서 세계와
          함께 성장합니다.
        </p>
        <div
          style={{
            display: "flex",
            gap: 8,
            background: "#fff",
            padding: 8,
            borderRadius: "var(--radius-md)",
            maxWidth: 520,
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <div style={{ position: "relative", flex: 1, display: "flex", alignItems: "center" }}>
            <span style={{ position: "absolute", left: 12, color: "var(--gray-400)", display: "flex" }}>
              <Icon name="search" size={20} />
            </span>
            <input
              placeholder="통합검색 — 학과, 공지, 학사일정"
              style={{
                width: "100%",
                height: 44,
                border: "none",
                outline: "none",
                padding: "0 12px 0 40px",
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                color: "var(--gray-900)",
                background: "transparent",
              }}
            />
          </div>
          <Button variant="primary">검색</Button>
        </div>
      </div>
    </section>
  );
}

// Quick menu — icon link strip overlapping the hero.
function QuickMenu() {
  const items = [
    { icon: "graduation-cap", label: "입학안내" },
    { icon: "calendar-days", label: "학사일정" },
    { icon: "book-open", label: "수강신청" },
    { icon: "building-2", label: "캠퍼스맵" },
    { icon: "briefcase", label: "취업·진로" },
    { icon: "users", label: "구성원" },
  ];
  return (
    <div style={{ maxWidth: "var(--container-max)", margin: "-36px auto 0", padding: "0 24px", position: "relative", zIndex: 5 }}>
      <div
        style={{
          background: "#fff",
          borderRadius: "var(--radius-lg)",
          boxShadow: "var(--shadow-md)",
          display: "grid",
          gridTemplateColumns: "repeat(6, 1fr)",
          overflow: "hidden",
        }}
      >
        {items.map((it, i) => (
          <a
            key={it.label}
            href="#"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 10,
              padding: "24px 8px",
              textDecoration: "none",
              color: "var(--gray-700)",
              borderLeft: i === 0 ? "none" : "1px solid var(--gray-100)",
            }}
          >
            <span style={{ color: "var(--green-600)", display: "flex" }}>
              <Icon name={it.icon} size={26} strokeWidth={1.6} />
            </span>
            <span style={{ fontSize: 14, fontWeight: 500 }}>{it.label}</span>
          </a>
        ))}
      </div>
    </div>
  );
}

window.Hero = Hero;
window.QuickMenu = QuickMenu;
