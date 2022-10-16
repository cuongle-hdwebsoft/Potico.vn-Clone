import React from "react";

interface Props {
  id: number;
  onClickMoreInfo: (id: number) => void;
  tab: number;
}

export default function PreviewItem({ id, onClickMoreInfo, tab }: Props) {
  return (
    <div className="preview-item" key={`tab-item-image-${tab}-${id}`}>
      <div className="preview-item__wrapper">
        <div className="preview-item__title">Product title</div>
        <img
          className="preview-item__image"
          style={{ width: "100%" }}
          src={`/product-detail/accessories/tab${tab}/${id + 1}.jpg `}
          alt=""
        />
        <div className="preview-item__price">19.000 đ</div>
        <div
          className="preview-item__more-info"
          onClick={() => onClickMoreInfo(id)}
        >
          <i className="fa-solid fa-circle-info"></i>
        </div>
      </div>
    </div>
  );
}
