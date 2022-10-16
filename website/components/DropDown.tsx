import { useState } from "react";

interface Props {
  children: any;
  dropdown: any;
}

export default function DropDown({ children, dropdown }: Props) {
  const [isOpenCartDropdown, setIsOpenCartDropdown] = useState(false);

  return (
    <div className={`dropdown ${isOpenCartDropdown ? "dropdown--active" : ""}`}>
      <div
        onClick={() => setIsOpenCartDropdown(true)}
        className="dropdown__content"
      >
        {children}
      </div>
      <div className="dropdown__overplay vw-100">
        {dropdown}
        <i
          onClick={() => setIsOpenCartDropdown(false)}
          className="fa-solid fa-xmark position-absolute"
          style={{ top: 5, right: 12 }}
        ></i>
      </div>
    </div>
  );
}
