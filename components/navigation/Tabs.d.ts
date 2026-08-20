import * as React from "react";

export interface TabItem {
  id: string;
  label: React.ReactNode;
}

export interface TabsProps {
  items: TabItem[];
  /** 제어형 선택 값. */
  value?: string;
  /** 비제어형 초기 값. */
  defaultValue?: string;
  onChange?: (id: string) => void;
  style?: React.CSSProperties;
}

/**
 * Horizontal tabs with a 2px green underline indicator per §5.8.
 */
export function Tabs(props: TabsProps): JSX.Element;
