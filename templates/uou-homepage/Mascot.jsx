/* global React, Icon */
// 울리니 마스코트 — 홈페이지 배치용. 마스코트는 전용 파스텔 팔레트를 유지하고,
// 섹션 배경만 코퍼레이트 그린 틴트(green-50)를 사용해 두 팔레트를 혼용하지 않음.

// 캠퍼스 라이프 배너 — 좌측 텍스트 + 퀵링크, 우측 울리니 일러스트.
function UlrineeBand() {
  const chips = [
    { icon: "calendar-days", label: "학사일정" },
    { icon: "map-pin", label: "캠퍼스맵" },
    { icon: "utensils", label: "학식메뉴" },
    { icon: "bus", label: "셔틀버스" },
  ];
  return (
    <section style={{ maxWidth: "var(--container-max)", margin: "80px auto 0", padding: "0 24px" }}>
      <div
        style={{
          position: "relative",
          background: "var(--green-50)",
          border: "1px solid var(--green-100)",
          borderRadius: "var(--radius-xl)",
          padding: "40px 44px",
          display: "flex",
          alignItems: "center",
          gap: 32,
          overflow: "hidden",
        }}
      >
        <div style={{ flex: 1 }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13, fontWeight: 700, color: "var(--green-700)", marginBottom: 10 }}>
            <span>마스코트 울리니</span>
            <span style={{ color: "var(--green-300)" }}>·</span>
            <span style={{ color: "var(--gray-500)", fontWeight: 500 }}>Ulrinee</span>
          </div>
          <h2 style={{ fontSize: 28, lineHeight: "36px", fontWeight: 800, color: "var(--gray-900)", margin: "0 0 8px" }}>
            울리니와 함께하는 캠퍼스 라이프
          </h2>
          <p style={{ fontSize: 16, lineHeight: "26px", color: "var(--gray-600)", margin: "0 0 20px", maxWidth: 460 }}>
            진리의 빛, 자주의 바람, 봉사의 손길. 울산대 생활에 필요한 정보를 울리니가 안내합니다.
          </p>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {chips.map((c) => (
              <a
                key={c.label}
                href="#"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  height: 40,
                  padding: "0 16px",
                  background: "var(--gray-0)",
                  border: "1px solid var(--green-200)",
                  borderRadius: "var(--radius-full)",
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--green-800)",
                  textDecoration: "none",
                }}
              >
                <span style={{ color: "var(--green-600)", display: "flex" }}><Icon name={c.icon} size={16} /></span>
                {c.label}
              </a>
            ))}
          </div>
        </div>
        <div style={{ flex: "none", width: 220, display: "flex", justifyContent: "center" }}>
          <img
            src="../../assets/mascot/poses-2d/campus-tour.png"
            alt="울리니 캠퍼스 탐방"
            style={{ height: 220, width: "auto", objectFit: "contain", filter: "drop-shadow(0 8px 16px rgba(0,0,0,0.10))" }}
          />
        </div>
      </div>
    </section>
  );
}

// 울리니 도우미 — 우하단 플로팅 위젯 (홈페이지 안내 챗봇 진입점).
function UlrineeHelper() {
  const [open, setOpen] = React.useState(true);
  return (
    <div style={{ position: "fixed", right: 24, bottom: 24, zIndex: 50, display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 12 }}>
      {open && (
        <div
          style={{
            background: "var(--gray-0)",
            border: "1px solid var(--gray-200)",
            borderRadius: "var(--radius-lg)",
            boxShadow: "var(--shadow-lg)",
            padding: "14px 16px",
            maxWidth: 240,
            position: "relative",
          }}
        >
          <button
            onClick={() => setOpen(false)}
            aria-label="닫기"
            style={{ position: "absolute", top: 8, right: 8, appearance: "none", background: "none", border: "none", color: "var(--gray-400)", cursor: "pointer", display: "flex" }}
          >
            <Icon name="x" size={16} />
          </button>
          <div style={{ fontSize: 14, fontWeight: 700, color: "var(--gray-900)", marginBottom: 4 }}>안녕하세요, 울리니예요!</div>
          <div style={{ fontSize: 13, lineHeight: "20px", color: "var(--gray-600)" }}>무엇이 궁금하신가요? 학사·장학·캠퍼스 정보를 안내해 드릴게요.</div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label="울리니 도우미"
        style={{
          width: 72,
          height: 72,
          borderRadius: "var(--radius-full)",
          background: "var(--green-50)",
          border: "2px solid var(--green-500)",
          boxShadow: "var(--shadow-md)",
          cursor: "pointer",
          padding: 0,
          overflow: "hidden",
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
        }}
      >
        <img src="../../assets/mascot/ulrinee-front.png" alt="울리니" style={{ width: 64, height: "auto", marginBottom: -4 }} />
      </button>
    </div>
  );
}

window.UlrineeBand = UlrineeBand;
window.UlrineeHelper = UlrineeHelper;
