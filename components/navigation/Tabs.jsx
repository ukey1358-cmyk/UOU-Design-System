import React from "react";

/**
 * UOU Tabs — 하단 그린 인디케이터 탭. items: [{ id, label }].
 */
export function Tabs({ items = [], value, defaultValue, onChange, style, ...rest }) {
  const [internal, setInternal] = React.useState(
    defaultValue ?? (items[0] && items[0].id)
  );
  const active = value !== undefined ? value : internal;

  const select = (id) => {
    if (value === undefined) setInternal(id);
    onChange && onChange(id);
  };

  return (
    <div
      role="tablist"
      style={{
        display: "flex",
        gap: "var(--space-6)",
        borderBottom: "1px solid var(--gray-100)",
        ...style,
      }}
      {...rest}
    >
      {items.map((it) => {
        const isActive = it.id === active;
        return (
          <button
            key={it.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => select(it.id)}
            style={{
              appearance: "none",
              background: "none",
              border: "none",
              padding: "0 0 12px",
              marginBottom: -1,
              fontFamily: "var(--font-sans)",
              fontSize: "var(--text-body)",
              fontWeight: isActive ? "var(--fw-bold)" : "var(--fw-medium)",
              color: isActive ? "var(--green-500)" : "var(--gray-600)",
              borderBottom: isActive
                ? "2px solid var(--green-500)"
                : "2px solid transparent",
              cursor: "pointer",
              transition: "color 120ms ease",
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
