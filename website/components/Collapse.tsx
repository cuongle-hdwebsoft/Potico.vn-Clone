import React, { useState } from "react";

interface Collapse {
  children: JSX.Element[];
}

export default function Collapse({ children }: Collapse) {
  const items = children.map((item) => {
    if (item?.type?.name === "CollapseItem") {
      return item;
    } else {
      return null;
    }
  });

  return <div className="collapse-component">{items}</div>;
}

interface CollapseItem {
  children: string | number | boolean | JSX.Element | JSX.Element[];
  title?: string;
}

const CollapseItem = ({ children, title }: CollapseItem) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`collapse-component__item ${
        isOpen ? "collapse-component__item--active" : ""
      }`}
    >
      <div
        onClick={() => setIsOpen((old) => !old)}
        className="collapse-component__icon"
      >
        <i className="fa-solid fa-greater-than"></i>
      </div>
      <div className="collapse-component__title">{title}</div>
      <div className="collapse-component__content">{children}</div>
    </div>
  );
};

Collapse.Item = CollapseItem;
