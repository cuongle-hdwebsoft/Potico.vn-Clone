import React, { useState } from "react";
import * as uuid from "uuid";

interface Collapse {
  children: JSX.Element[];
}

export default function Collapse({ children }: Collapse) {
  const [activeIndex] = useState(0);
  const items = children.map((item, index) => {
    if (
      (process.env.NODE_ENV === "development" &&
        item?.type?.name === "CollapseItem") ||
      process.env.NODE_ENV === "production"
    ) {
      return React.cloneElement(item, { activeIndex, index, key: uuid.v4() });
    } else {
      return "";
    }
  });

  return <div className="collapse-component">{items}</div>;
}

interface CollapseItem {
  children: string | number | boolean | JSX.Element | JSX.Element[];
  title?: string | JSX.Element;
  activeIndex?: number;
  index?: number;
}

const CollapseItem = ({
  children,
  title,
  activeIndex,
  index,
}: CollapseItem) => {
  const [isOpen, setIsOpen] = useState(activeIndex === index);

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
