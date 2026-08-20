import * as React from "react";

export interface InputProps {
  value?: string;
  defaultValue?: string;
  placeholder?: string;
  type?: string;
  disabled?: boolean;
  /** 오류 상태 — 보더가 danger 색으로 표시됩니다. */
  invalid?: boolean;
  size?: "sm" | "md" | "lg";
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Single-line text input. 44px tall, green focus border + focus ring per §5.7.
 */
export function Input(props: InputProps): JSX.Element;
