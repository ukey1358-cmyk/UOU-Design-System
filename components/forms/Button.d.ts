import * as React from "react";

export interface ButtonProps {
  children?: React.ReactNode;
  /** Visual style. @default "primary" */
  variant?: "primary" | "secondary" | "outline" | "text" | "danger";
  /** Height preset — sm 36px · md 44px · lg 52px. @default "md" */
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Primary action control for the University of Ulsan web system.
 * Green is reserved for action — use `primary` sparingly, one per view.
 *
 * @startingPoint section="Forms" subtitle="버튼 — primary/secondary/outline/text/danger" viewport="700x150"
 */
export function Button(props: ButtonProps): JSX.Element;
