import React from "react";
import CardProduct from "./ProductCard";
import data from "../data";
import * as uuid from "uuid";

interface Props {
  startIndex: number;
  total: number;
  title: string;
}

export default function ProductSection({ total, startIndex, title }: Props) {
  return (
    <div className="product-section">
      {title ? (
        <>
          <div className="d-flex align-items-center flex-column flex-sm-row justify-content-center">
            <h2>{title}</h2>
            <a className="more-products">Thêm nhiều lựa chọn</a>
          </div>
          <div className="breakline breakline--small"></div>
        </>
      ) : null}

      <div className="row">
        {data.slice(startIndex, startIndex + total).map((item) => {
          return (
            <div
              key={uuid.v4()}
              className="col-6 col-sm-4 col-md-4 col-lg-3 col-xl-2"
            >
              <CardProduct item={item}></CardProduct>
            </div>
          );
        })}
      </div>
    </div>
  );
}
