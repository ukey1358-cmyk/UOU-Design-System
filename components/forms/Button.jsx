import React from "react";

/**
 * UOU Button — 공식 버튼 컴포넌트.
 * Primary green action by default; variants per CI/UI 매뉴얼 §5.1.
 */
export function Button({
  children,
  variant = "primary",
  size = "md",
  disabled = false,
  type = "button",
  onClick,
  style,
  ...rest
}) {
  const sizes = {
    sm: { height: 36, padding: "0 16px", font: "var(--text-body-sm)" },
    md: { height: 44, padding: "0 24px", font: "var(--text-body)" },
    lg: { height: 52, padding: "0 28px", font: "var(--text-body-lg)" },
  };
  const variants = {
    primary: {
      background: "var(--green-500)",
      color: "var(--gray-0)",
      border: "1px solid transparent",
    },
    secondary: {
      background: "var(--gray-0)",
      color: "var(--green-600)",
      border: "1px solid var(--green-500)",
    },
    outline: {
      background: "transparent",
      color: "var(--gray-800)",
      border: "1px solid var(--gray-200)",
    },
    text: {
      background: "transparent",
      color: "var(--green-600)",
      border: "1px solid transparent",
    },
    danger: {
      background: "var(--color-danger)",
      color: "var(--gray-0)",
      border: "1px solid transparent",
    },
  };
  const sz = sizes[size] || sizes.md;
  const vr = variants[variant] || variants.primary;

  const [hover, setHover] = React.useState(false);
  const hoverBg = {
    primary: "var(--green-600)",
    secondary: "var(--green-50)",
    outline: "var(--gray-50)",
    text: "transparent",
    danger: "#bd2929",
  }[variant];

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "var(--space-2)",
        height: sz.height,
        padding: sz.padding,
        fontFamily: "var(--font-sans)",
        fontSize: sz.font,
        fontWeight: "var(--fw-bold)",
        lineHeight: 1,
        borderRadius: "var(--radius-md)",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.45 : 1,
        textDecoration: variant === "text" && hover && !disabled ? "underline" : "none",
        transition: "background 120ms ease, color 120ms ease, border-color 120ms ease",
        ...vr,
        ...(hover && !disabled ? { background: hoverBg } : null),
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
