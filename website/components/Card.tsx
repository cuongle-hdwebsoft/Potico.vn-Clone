import React from "react";

interface Props {
  className?: string;
  children?: string | boolean | number | JSX.Element | JSX.Element[] | null;
  active?: boolean;
  onClick?: () => void;
}

export default function Card({ className, children, active, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className={
        "card " +
        (className ? className + " " : " ") +
        (active ? "card--active" : "")
      }
    >
      {children ?? "Card"}
    </div>
  );
}
