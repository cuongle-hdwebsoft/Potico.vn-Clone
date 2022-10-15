import React, { useState } from "react";

interface Tabs {
  children: JSX.Element[];
  defaultActiveTabIndex?: number;
}

export default function Tabs({ children, defaultActiveTabIndex }: Tabs) {
  const [activeIndex, setActiveIndex] = useState(defaultActiveTabIndex);

  const items = children
    ? children.map((i) => {
        if (
          (i &&
            i.type.name === "TabItem" &&
            process.env.NODE_ENV === "development") ||
          process.env.NODE_ENV === "production"
        ) {
          return React.cloneElement(i, {
            activeIndex: activeIndex ? activeIndex : 0,
          });
        } else {
          return null;
        }
      })
    : [];

  return (
    <div className="tab">
      <div className="tab__header d-flex overflow-x-scroll">
        {items.map((i, index) => (
          <div
            onClick={() => setActiveIndex(i?.props.index)}
            key={`tab__header-item-${index}`}
            className={`tab__header-item ${
              activeIndex === i?.props.index ? "active" : ""
            }`}
          >
            {i?.props.title}
          </div>
        ))}
      </div>
      <div className="tab__content">
        {items?.filter((i, index) => {
          return (
            index === activeIndex && (
              <div
                key={`tab__content-item-${index}`}
                className="tab__content-item"
              >
                {i}
              </div>
            )
          );
        })}
      </div>
    </div>
  );
}

interface TabItem {
  children: string | number | boolean | JSX.Element | JSX.Element[] | null;
  index: number;
  activeIndex?: number;
  title: string;
}

const TabItem = ({ children, index, activeIndex }: TabItem) => {
  return (
    <div
      className={`tab__items ${
        index == activeIndex ? "d-block" : "d-none overflow-hidden"
      }`}
    >
      {children}
    </div>
  );
};

Tabs.TabItem = TabItem;
