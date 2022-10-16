import { useEffect, useState } from "react";

interface Props {
  children: any;
  dropdown: any;
}

export default function DropDown({ children, dropdown }: Props) {
  const [isOpenCartDropdown, setIsOpenCartDropdown] = useState(false);

  const handleClose = () => {
    setIsOpenCartDropdown(false);
    const domEl = document.querySelector(".dropdown__fallback") as HTMLElement;

    if (domEl) {
      domEl.style.display = "none";
    }
  };

  useEffect(() => {
    const div = document.createElement("div");
    div.className = "dropdown__fallback";

    document.querySelector("body")?.appendChild(div);

    div.onclick = function () {
      handleClose();
    };

    return () => {
      const domEl = document.querySelector(
        ".dropdown__fallback"
      ) as HTMLElement;

      if (domEl) {
        document.querySelector("body")?.removeChild(div);
      }
    };
  }, []);

  return (
    <div className={`dropdown ${isOpenCartDropdown ? "dropdown--active" : ""}`}>
      <div
        onClick={() => {
          setIsOpenCartDropdown(true);
          const domEl = document.querySelector(
            ".dropdown__fallback"
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
