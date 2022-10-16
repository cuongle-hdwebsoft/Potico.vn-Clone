import { useEffect, useRef, useState } from "react";
import * as uuid from "uuid";

interface Props {
  children: any;
  dropdown: any;
}

export default function DropDown({ children, dropdown }: Props) {
  const [isOpenCartDropdown, setIsOpenCartDropdown] = useState(false);
  const id = useRef(uuid.v4());
  const dropdownFallbackClassName = "dropdown__fallback-" + id.current;

  const handleClose = () => {
    setIsOpenCartDropdown(false);
    const domEl = document.querySelector(
      "." + dropdownFallbackClassName
    ) as HTMLElement;

    if (domEl) {
      domEl.style.display = "none";
    }
  };

  useEffect(() => {
    const div = document.createElement("div");
    div.className = "dropdown__fallback " + dropdownFallbackClassName;

    document.querySelector("body")?.appendChild(div);

    div.onclick = () => {
      handleClose();
    };

    return () => {
      const domEl = document.querySelector(
        "." + dropdownFallbackClassName
      ) as HTMLElement;

      if (domEl) {
        document.querySelector("body")?.removeChild(domEl);
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={`dropdown ${isOpenCartDropdown ? "dropdown--active" : ""}`}>
      <div
        onClick={() => {
          setIsOpenCartDropdown(true);
          const domEl = document.querySelector(
            "." + dropdownFallbackClassName
          ) as HTMLElement;

          if (domEl) {
            domEl.style.display = "block";
          }
        }}
        className="dropdown__content"
      >
        {children}
      </div>
      <div className="dropdown__overplay vw-100">
        {dropdown}
        <i
          onClick={handleClose}
          className="fa-solid fa-xmark position-absolute"
          style={{ top: 5, right: 12 }}
        ></i>
      </div>
    </div>
  );
}
