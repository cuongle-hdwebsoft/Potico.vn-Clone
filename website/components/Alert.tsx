import React from "react";

interface Props {
  title?: string;
  description?:
    | string
    | number
    | boolean
    | JSX.Element
    | (JSX.Element | string | number | boolean)[]
    | null;
  type?: "info" | "success" | "warning" | "error";
}

export default function Alert({ title, description, type }: Props) {
  return (
    <div className={`alert alert--${type ?? "info"}`}>
      <div className="alert__title">{title}</div>
      <div className="alert__description">{description}</div>
    </div>
  );
}
