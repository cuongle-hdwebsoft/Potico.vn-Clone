import React from "react";

interface Props {
  placeholder?: string;
  label?: string;
  id: string;
  width?: number | string;
  className?: string;
}

export default function Input({
  placeholder,
  label,
  id,
  width,
  className,
}: Props) {
  return (
    <div className={"input__wrapper " + className} style={{ width }}>
      {label ? <label htmlFor={id}>{label}</label> : ""}
      <input
        id={id}
        placeholder={placeholder}
        className="input input--default input--md"
      />
    </div>
  );
}

interface InputSelect {
  placeholder?: string;
  label?: string;
  id: string;
  width?: number | string;
  className?: string;
}

const InputSelect = ({
  placeholder,
  label,
  id,
  width,
  className,
}: InputSelect) => {
  return (
    <div className={"input__wrapper " + className} style={{ width }}>
      {label ? <label htmlFor={id}>{label}</label> : ""}
      <select>
        <option>Mặc định</option>
      </select>
    </div>
  );
};

Input.Select = InputSelect;

interface TextArea {
  placeholder?: string;
  label?: string;
  id: string;
  width?: number | string;
  className?: string;
}

const TextArea = ({ placeholder, label, id, width, className }: TextArea) => {
  return (
    <div className={"input__wrapper " + className} style={{ width }}>
      {label ? <label htmlFor={id}>{label}</label> : ""}
      <textarea rows={5}></textarea>
    </div>
  );
};

Input.TextArea = TextArea;
