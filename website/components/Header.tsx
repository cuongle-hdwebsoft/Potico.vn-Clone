import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import CartDropdown from "./CartDropdown";
import DropDown from "./DropDown";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="header">
      <div className="header__top-wrapper">
        <div className="container ">
          <div className="header__top">
            <div className="header__free-delivery-quote  position-xl-relative">
              Miễn phí vận chuyển nội thành TP.HCM & Hà Nội.
            </div>
            <ul className="header__top-list d-none d-lg-flex">
              <li className="header__top-list-item">
                <a href="">Theo dõi đơn hàng</a>
              </li>
              <li className="header__top-list-item">
                <a href="">Đăng nhập</a>
              </li>
              <li className="header__top-list-item">
                <a href="">Đăng ký</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header__bottom-wrapper">
        <div className="container container-xl">
          <div className="header__bottom">
            <Link href="/">
              <a href="">
                <Image
                  priority
                  src="/logo.png"
                  alt="logo"
                  width={150}
                  height={35}
                  quality={100}
                  layout="fixed"
                  style={{ flex: 0 }}
                />
              </a>
            </Link>
            <div className="header__location">
              <span>
                <i
                  style={{ color: "green" }}
                  className="fa-solid fa-location-dot header__icon"
                ></i>
                Giao đến
              </span>
              <select>
                <option>Hồ Chí Minh</option>
                <option>Hà nội</option>
                <option>Các tỉnh khác</option>
              </select>
            </div>
            <ul className={`header__category-list ${isOpen ? "active" : ""}`}>
              <li className="header__category-list-item">
                <Link passHref href="/campaign/1">
                  <a href="">Ngày phụ nữ Việt Nam</a>
                </Link>
              </li>
              <li className="header__category-list-item">
                <Link passHref href="/campaign/1">
                  <a href="">Sinh nhật</a>
                </Link>
                <ul className="header__category-sublist">
                  <li className="header__category-sublist-item">
                    <a href="">Tất cả</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Bạn bè</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Vợ/ Bạn gái</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Chồng/ Bạn trai</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Mẹ</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Bố</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Trẻ em</a>
                  </li>
                  <li className="header__category-sublist-item">
                    <a href="">Anh/ chị/ em</a>
                  </li>
                </ul>
              </li>
              <li className="header__category-list-item">
                <Link passHref href="/campaign/1">
                  <a href="">Dịp</a>
                </Link>
              </li>
              <li className="header__category-list-item">
                <Link passHref href="/campaign/1">
                  <a href="">Loại hoa & cây</a>
                </Link>
              </li>
              <li className="header__category-list-item">
                <Link passHref href="/campaign/1">
                  <a href="">Loại sản phẩm</a>
                </Link>
              </li>
              <li className="header__category-list-item">
                <Link passHref href="/campaign/1">
                  <a href="">Sản phẩm khác</a>
                </Link>
              </li>
              <li className="close d-block d-xl-none ">
                <i
                  onClick={() => setIsOpen(false)}
                  className="fa-solid fa-close large"
                ></i>
              </li>
            </ul>
            <div className="header__group-icon">
              <DropDown
                dropdown={
                  <div className="d-flex align-items-center pt-3">
                    <input
                      style={{ flexGrow: 1 }}
                      className="input py-1 ps-1"
                      placeholder="Nhập từ khóa tìm kiếm"
                    />
                    <button
                      className="btn btn--primary btn--sm"
                      style={{ height: 26 }}
                    >
                      Tìm
                    </button>
                  </div>
                }
              >
                <i className="fa-solid fa-magnifying-glass header__icon d-inline-block large"></i>
              </DropDown>
              <DropDown dropdown={<CartDropdown></CartDropdown>}>
                <i className="fa-solid fa-cart-shopping header__icon"></i>
              </DropDown>
              <i
                className="fa-solid fa-bars header__icon d-inline-block d-xl-none large"
                onClick={() => setIsOpen(true)}
              ></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
