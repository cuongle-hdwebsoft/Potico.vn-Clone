import React, { useState } from "react";
import * as uuid from "uuid";

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState<
    {
      key: string;
      title: string;
      price: string;
      amount: number;
      img: string;
    }[]
  >(
    Array.from({
      length: 6,
    }).map((_, index) => {
      return {
        key: uuid.v4(),
        title: "Mon Bel Amour - Cơ Bản",
        price: "898,000 ₫",
        amount: 1,
        img: "/cart-dropdown/1.jpg",
      };
    })
  );

  return (
    <div className="cart-dropdown ">
      <h2>Sản phẩm trong giỏ hàng</h2>

      <div style={{ height: 300, overflowY: "scroll" }}>
        {cartItems.map((item) => {
          return (
            <CartDropdownItem
              key={item.key}
              title={item.title}
              amount={item.amount}
              img={item.img}
              price={item.price}
            ></CartDropdownItem>
          );
        })}
      </div>

      <div className="total d-flex justify-content-between py-2 flex-row">
        <strong>Tạm tính: </strong>
        <div>1,227,000 ₫</div>
      </div>

      <button className="btn btn--primary btn--sm d-block mx-auto">
        Thanh toán
        <i className="fa-solid fa-cart-shopping ml-3 d-inline-block"></i>
      </button>
    </div>
  );
}

interface CartDropdownItem {
  title: string;
  amount: number;
  price: string;
  img: string;
}

const CartDropdownItem = ({ title, amount, price, img }: CartDropdownItem) => {
  return (
    <div className="cart-dropdown__item d-flex align-items-center position-relative">
      <img className="cart-dropdown__img me-2" src={img} alt="" />
      <div className="cart-dropdown__info d-flex flex-column">
        <div className="cart-dropdown__title">
          {title}aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        </div>
        <div className="d-flex justify-content-between">
          <div>x{amount}</div>
          <div>{price}</div>
        </div>
      </div>
      <i
        className="fa-solid fa-xmark position-absolute"
        style={{ top: 5, right: 5 }}
      ></i>
    </div>
  );
};
