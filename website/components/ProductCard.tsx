/* eslint-disable @next/next/no-img-element */
export default function CardProduct() {
  return (
    <div className="product-card">
      <img
        className="product-card__img"
        alt=""
        src="/products/A Million Dreams.png"
      />
      <div className="product-card__title">Beatiful You</div>
      <div className="product-card__description">
        <div className="product-card__price">
          <span className="product-card__real-price">349,000đ</span>
          <del>449,000đ</del>
        </div>
        <div className="product-card__rating">
          <span className="product-card__rating-start">4.9</span>
          <span className="product-card__rating-total-rating">(17)</span>
        </div>
      </div>
    </div>
  );
}
