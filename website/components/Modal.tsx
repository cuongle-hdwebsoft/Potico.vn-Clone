import React, { ReactElement, useRef } from "react";
import ReactDOM from "react-dom";

interface Modal {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  content?: any;
  width?: number;
}

export default function Modal({
  content,
  isOpen,
  title,
  onClose,
  width,
}: Modal) {
  const domEl = document.getElementById("modal");

  if (!domEl) return null;

  if (domEl)
    return ReactDOM.createPortal(
      <div
        className={`modal-component ${isOpen ? "modal-component--active" : ""}`}
      >
        <div onClick={onClose} className="modal-component__overplay"></div>
        {/* <div className="modal-component__close-icon">
          <i className="fa-solid fa-xmark"></i>
        </div> */}
        <div style={{ width: width || 500 }} className="modal-component__body">
          <div className="modal-component__title mb-3">{title}</div>
          <div className="modal-component__content">{content}</div>
        </div>
      </div>,
      domEl
    ) as unknown as any;
}
