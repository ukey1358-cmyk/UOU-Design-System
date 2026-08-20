/* global React */
// UOU signature — OFFICIAL UOU logomark (assets/logo/logomark-solid.png) + 로고타입 text.
// The logomark image must not be stretched/recolored/rotated (CI §9.3).
function Wordmark({ color = "var(--gray-900)", sub = "var(--gray-500)", compact = false, mark = "solid" }) {
  const src = mark === "white"
    ? "../../assets/logo/logomark-outline.png"
    : "../../assets/logo/logomark-solid.png";
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12, userSelect: "none" }}>
      <img
        src={src}
        alt="울산대학교 UOU"
        style={{ height: 30, width: "auto", flex: "none", display: "block" }}
      />
      {!compact && (
        <div style={{ lineHeight: 1.1, borderLeft: "1px solid var(--gray-200)", paddingLeft: 12 }}>
          <div style={{ fontSize: 20, fontWeight: 800, color, letterSpacing: "-0.01em" }}>
            울산대학교
          </div>
          <div style={{ fontSize: 10, fontWeight: 600, color: sub, letterSpacing: "0.08em" }}>
            UNIVERSITY OF ULSAN
          </div>
        </div>
      )}
    </div>
  );
}

// Lucide icon helper — renders the placeholder, then swaps it to an SVG after
// every render (covers state-driven re-renders too).
function Icon({ name, size = 20, color = "currentColor", style }) {
  React.useEffect(() => {
    if (window.lucide) window.lucide.createIcons();
  });
  return (
    <i
      data-lucide={name}
      style={{ width: size, height: size, color, display: "inline-flex", ...style }}
    />
  );
}

window.Wordmark = Wordmark;
window.Icon = Icon;
