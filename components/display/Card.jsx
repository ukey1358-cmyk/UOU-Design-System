import React from "react";

/**
 * UOU Card — 흰 배경, 얇은 보더 또는 그림자, radius-lg. 클릭형은 hover 시 상단 그린 보더.
 */
export function Card({
  children,
  title,
  interactive = false,
  elevated = false,
  onClick,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const showHover = interactive && hover;

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        background: "var(--gray-0)",
        border: "1px solid var(--gray-200)",
        borderTop: showHover ? "3px solid var(--green-500)" : "1px solid var(--gray-200)",
        borderRadius: "var(--radius-lg)",
        padding: "var(--space-5)",
        boxShadow: showHover
          ? "var(--shadow-md)"
          : elevated
          ? "var(--shadow-sm)"
          : "none",
        cursor: interactive ? "pointer" : "default",
        transition: "box-shadow 140ms ease, border-color 140ms ease",
        ...style,
      }}
      {...rest}
    >
      {title && (
        <h4
          style={{
            margin: "0 0 var(--space-2)",
            fontFamily: "var(--font-sans)",
            fontSize: "var(--text-h4)",
            lineHeight: "var(--leading-h4)",
            fontWeight: "var(--fw-medium)",
            color: "var(--gray-900)",
          }}
        >
          {title}
        </h4>
      )}
      {children && (
        <div
          style={{
            fontSize: "var(--text-body-sm)",
            lineHeight: "var(--leading-body-sm)",
            color: "var(--gray-600)",
          }}
        >
          {children}
        </div>
      )}
    </div>
  );
}
