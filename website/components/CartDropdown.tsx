import { useRouter } from "next/router";
import React, { useState } from "react";
import * as uuid from "uuid";

const fakeArr = Array.from({
  length: 3,
}).map((_, index) => {
  return {
    key: uuid.v4(),
    title: "Mon Bel Amour - Cơ Bản",
    price: "898,000 ₫",
    amount: 1,
    img: "/cart-dropdown/1.jpg",
  };
});

fakeArr.push(
  ...Array.from({
    length: 3,
  }).map((_, index) => {
    return {
      key: uuid.v4(),
      title: "Under The Blue Sky - Cơ Bản",
      price: "898,000 ₫",
      amount: 1,
      img: "/cart-dropdown/2.jpg",
    };
  })
);

interface CartItem {
  key: string;
  title: string;
  price: string;
  amount: number;
  img: string;
}

export default function CartDropdown() {
  const [cartItems, setCartItems] = useState<CartItem[]>(fakeArr);
  const { push } = useRouter();

  const handleRemoveItem = (id: string) => {
    setCartItems((old) => {
      const index = old.findIndex((i) => i.key === id);

      return [...old.slice(0, index), ...old.slice(index + 1)];
    });
  };

  return (
    <div className="cart-dropdown ">
      <h2>Sản phẩm trong giỏ hàng</h2>

      <div
        style={{
          maxHeight: 300,
          overflowY: cartItems.length > 4 ? "scroll" : "hidden",
        }}
      >
        {cartItems.length > 0 ? (
          cartItems.map((item) => {
            return (
              <CartDropdownItem
                onRemove={handleRemoveItem}
                key={item.key}
                item={{
                  key: item.key,
                  title: item.title,
                  amount: item.amount,
                  img: item.img,
                  price: item.price,
                }}
              ></CartDropdownItem>
            );
          })
        ) : (
          <p style={{ textAlign: "center" }}>Không có sản phẩm nào cả</p>
        )}
      </div>

      <div className="total d-flex justify-content-between py-2 flex-row">
        <strong>Tạm tính: </strong>
        <div>{cartItems.length > 0 ? "1,227,000 " : "0"}₫</div>
      </div>

      <button
        onClick={() => push("/information")}
        className="btn btn--primary btn--sm d-block mx-auto"
      >
        Thanh toán
        <i className="fa-solid fa-cart-shopping ml-3 d-inline-block"></i>
      </button>
    </div>
  );
}

interface CartDropdownItem {
  item: CartItem;
  onRemove: (index: string) => void;
}

const CartDropdownItem = ({
  item: { title, amount, price, img, key },
  onRemove,
}: CartDropdownItem) => {
  return (
    <div className="cart-dropdown__item d-flex align-items-center position-relative">
      <img className="cart-dropdown__img me-2" src={img} alt="" />
      <div className="cart-dropdown__info d-flex flex-column">
        <div className="cart-dropdown__title" title={title}>
          {title}
        </div>
        <div className="d-flex justify-content-between">
          <div>x{amount}</div>
          <div>{price}</div>
        </div>
      </div>
      <i
        onClick={() => onRemove(key)}
        className="fa-solid fa-xmark position-absolute large"
        style={{ top: 5, right: 5 }}
      ></i>
    </div>
  );
};
