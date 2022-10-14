/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row g-3">
          <div className="col-12 col-sm-12 col-md-6 col-lg-4">
            <img
              style={{ width: 150, height: 35, marginBottom: 15 }}
              src="/logo.png"
              alt=""
            />

            <p>TP. Hồ Chí Minh: Châu Thới, Phường 15, Quận 10</p>

            <p>Hà Nội: An Dương, Phường Yên Phụ, Quận Tây Hồ</p>

            <p>
              Chỉ từ 149k - Mua hoa tươi không lo về giá. Giao hàng miễn phí
              trong ngày, khu vực nội thành Hà Nội, TpHCM. Thu tiền mặt tận nơi,
              chuyển khoản hoặc thanh toán qua thẻ. Lựa chọn hoàn hảo cho những
              dịp đặc biệt: Sinh Nhật, Kỉ Niệm, Lãng Mạn, Ngày Phụ Nữ, Ngày
              Valentine, Ngày của Mẹ. Ngoài ra, Potico Việt Nam nhận đặt vòng
              hoa, kệ hoa khai trương, chúc mừng và cho các dịp khác.
            </p>

            <div className="subribe-input-group d-flex">
              <input
                placeholder="example@yahoo.com.vn"
                className="input"
                style={{ flex: 1 }}
                type="text"
              />
              <button className="btn btn--primary">Đăng ký</button>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2">
            <h5>LIÊN KẾT TRANG WEB</h5>
            <ul>
              <li>
                <a href="#">Giới thiệu</a>
              </li>
              <li>
                <a href="#">Hướng dẫn chăm sóc hoa</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Theo dõi đơn hàng</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2">
            <h5>CHĂM SÓC KHÁCH HÀNG</h5>
            <ul>
              <li>
                <a href="#">Liên hệ với chúng tôi</a>
              </li>
              <li>
                <a href="#">Câu hỏi thường gặp</a>
              </li>
              <li>
                <a href="#">Phương thức thanh toán</a>
              </li>
              <li>
                <a href="#">Điều khoản và điều kiện</a>
              </li>
              <li>
                <a href="#">Chính sách bảo mật</a>
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2">
            <h5>BẠN CÓ CÂU HỎI?</h5>
            <h6>Điện thoại:</h6> <p>1900 63 35 37</p>{" "}
            <p>Thứ Hai - Chủ Nhật (8:00 - 19:00)</p>
            <h6>Email: </h6>
            <p>contact@potico.vn</p>
            <h6>Truyền thông và Đối tác: </h6>
            <p>marketing@potico.vn</p>
          </div>
          <div className="col-12 col-sm-12 col-md-6 col-lg-2">
            <h5>POTICO.vn</h5>
            <h6>Philippines - FlowerStore.ph</h6> <h6>Vietnam - Potico.vn</h6>
            <h6>Thailand - Potico.co.th</h6> <p>Văn Phòng Hành Chính</p>
            <p> TP. Hồ Chí Minh: Châu Thới, Phường 15, Quận 10</p>
            <p>Hà Nội: An Dương, Phường Yên Phụ, Quận Tây Hồ</p>
          </div>
        </div>

        <div className="d-flex align-items-center justify-content-between mt-3 flex-column flex-sm-row">
          <p className="mb-0">© 2022 CÔNG TY TNHH FLOWER STORE VIỆT NAM</p>

          <div className="d-flex mt-3">
            <img
              style={{ width: 30, height: 30, margin: "0px 5px" }}
              src="/payment/momo.png"
              alt=""
            />
            <img
              style={{ width: 30, height: 30, margin: "0px 5px" }}
              src="/payment/50_HhLpYDdXbFo37Cpe7FevEuzsN.webp"
              alt=""
            />
            <img
              style={{ width: 30, height: 30, margin: "0px 5px" }}
              src="/payment/50_URoNnywsPIXSiI9G9rMLdTQ3A.png"
              alt=""
            />
            <img
              style={{ width: 30, height: 30, margin: "0px 5px" }}
              src="/payment/50_ZcV3tzUR8gcGGDps3Fmh0g83r.png"
              alt=""
            />
            <img
              style={{ width: 30, height: 30, margin: "0px 5px" }}
              src="/payment/momo.png"
              alt=""
            />
          </div>

          <div className="d-flex mt-3">
            <a className="social-icon fb-icon">
              <i className="fa-brands fa-facebook-f"></i>
            </a>
            <a className="social-icon insta-icon">
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a className="social-icon toptop-icon">
              <i className="fa-brands fa-tiktok"></i>
            </a>
            <a className="social-icon printest-icon">
              <i className="fa-brands fa-pinterest"></i>
            </a>
            <a className="social-icon linkedin-icon">
              <i className="fa-brands fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
