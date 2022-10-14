import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="header">
      <div className="header__top-wrapper">
        <div className="container ">
          <div className="header__top">
            <div className="header__free-delivery-quote">
              Miễn phí vận chuyển nội thành TP.HCM & Hà Nội.
            </div>
            <ul className="header__top-list">
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
            <ul className="header__category-list">
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
            </ul>
            <div className="header__group-icon">
              <i className="fa-solid fa-house header__icon"></i>
              <i className="fa-solid fa-cart-shopping header__icon"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
