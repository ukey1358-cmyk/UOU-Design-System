import * as React from "react";

export interface CardProps {
  children?: React.ReactNode;
  /** 카드 제목 (h4). */
  title?: React.ReactNode;
  /** 클릭형 카드 — hover 시 그림자 + 상단 그린 보더. */
  interactive?: boolean;
  /** 기본 그림자(shadow-sm)를 항상 표시. */
  elevated?: boolean;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
  style?: React.CSSProperties;
}

/**
 * Content container — white surface, radius-lg, 24px padding per §5.3.
 *
 * @startingPoint section="Display" subtitle="카드 — 제목·본문·클릭형 hover" viewport="700x200"
 */
export function Card(props: CardProps): JSX.Element;
