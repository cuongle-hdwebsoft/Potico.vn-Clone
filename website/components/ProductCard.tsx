/* eslint-disable @next/next/no-img-element */

import Link from "next/link";

interface Props {
  item: {
    img: string;
    title: string;
    price: string;
    discount: string;
    star: string;
    rating: string;
  };
}

export default function CardProduct({ item }: Props) {
  return (
    <Link href="/product/1">
      <div className="product-card">
        <img
          className="product-card__img"
          alt=""
          src={`/products/${item.title}.png`}
        />
        <div className="product-card__title">{item.title}</div>
        <div className="product-card__description">
          <div className="product-card__price">
            <span className="product-card__real-price">{item.price}</span>
            <del>{item.discount}</del>
          </div>
          <div className="product-card__rating flex-column align-items-center">
            <span className="product-card__rating-start">
              {item.star ? (
                <>
                  <i
                    className="fa-solid fa-star"
                    style={{ color: "orange", marginRight: 1 }}
                  ></i>
                  {item.star}
                </>
              ) : null}
            </span>
            <span className="product-card__rating-total-rating">
              {item.rating}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
