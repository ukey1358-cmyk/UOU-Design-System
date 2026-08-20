import React from "react";

/**
 * UOU Badge — 좁은 영역의 상태/분류 표시. 칩 형태(radius-full).
 */
export function Badge({ children, variant = "default", style, ...rest }) {
  const variants = {
    default: { background: "var(--green-50)", color: "var(--green-800)" },
    accent: { background: "var(--yellow-100)", color: "var(--yellow-700)" },
    info: { background: "var(--gray-100)", color: "var(--gray-700)" },
    success: { background: "var(--green-50)", color: "var(--green-700)" },
    danger: { background: "#FBE9E9", color: "var(--color-danger)" },
  };
  const vr = variants[variant] || variants.default;

  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        padding: "4px 12px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-caption)",
        fontWeight: "var(--fw-medium)",
        lineHeight: 1.4,
        borderRadius: "var(--radius-full)",
        whiteSpace: "nowrap",
        ...vr,
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
