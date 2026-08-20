import * as React from "react";

export interface BadgeProps {
  children?: React.ReactNode;
  /** 색상 종류. @default "default" */
  variant?: "default" | "accent" | "info" | "success" | "danger";
  style?: React.CSSProperties;
}

/**
 * Small status / category chip — radius-full, 4px×12px padding per §5.6.
 */
export function Badge(props: BadgeProps): JSX.Element;
