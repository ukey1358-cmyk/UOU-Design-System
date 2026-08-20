import React from "react";

/**
 * UOU Input — 단일 행 텍스트 입력. 높이 44, 포커스 시 그린 보더 + 포커스 링.
 */
export function Input({
  value,
  defaultValue,
  placeholder,
  type = "text",
  disabled = false,
  invalid = false,
  size = "md",
  onChange,
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  const height = size === "sm" ? 36 : size === "lg" ? 52 : 44;
  const borderColor = invalid
    ? "var(--color-danger)"
    : focus
    ? "var(--green-500)"
    : "var(--gray-300)";

  return (
    <input
      type={type}
      value={value}
      defaultValue={defaultValue}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      style={{
        boxSizing: "border-box",
        width: "100%",
        height,
        padding: "0 14px",
        fontFamily: "var(--font-sans)",
        fontSize: "var(--text-body)",
        color: "var(--gray-900)",
        background: disabled ? "var(--gray-100)" : "var(--gray-0)",
        border: `1px solid ${borderColor}`,
        borderRadius: "var(--radius-sm)",
        outline: "none",
        boxShadow: focus && !invalid ? "var(--focus-ring)" : "none",
        transition: "border-color 120ms ease, box-shadow 120ms ease",
        cursor: disabled ? "not-allowed" : "text",
        ...style,
      }}
      {...rest}
    />
  );
}
