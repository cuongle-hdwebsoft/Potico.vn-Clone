import Link from "next/link";
import React from "react";
import Card from "../components/Card";
import Collapse from "../components/Collapse";
import Input from "../components/Input";
import MainLayout from "../components/MainLayout";

export default function Payment() {
  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-8 mb-4">
            <img
              className="d-block mx-auto"
              src="/logo.png"
              alt=""
              style={{ width: "200px" }}
            />
            <div className="breadcumb">
              <span className="breadcumb__item">
                <Link href="/">Trang chủ</Link>
              </span>
              <span className="divider">
                <i className="fa-solid fa-greater-than"></i>
              </span>
              <span className="breadcumb__item">
                <Link href="/information">Thông tin</Link>
              </span>
              <span className="divider">
                <i className="fa-solid fa-greater-than"></i>
              </span>
              <span className="breadcumb__item">Phương thức thanh toán</span>
            </div>

            <h1
              style={{ fontSize: 13, fontWeight: "bold" }}
              className="mt-3 mb-4"
            >
              Phương thức thanh toán
            </h1>

            <Collapse>
              <Collapse.Item
                title={
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: 35, height: 35 }}
                      src="/payment/50_ros8madgW35HeN2hVyOY9aguc.png"
                      alt=""
                    />
                    <div>Thanh toán khi giao hàng</div>
                  </div>
                }
              >
                <p>Thanh toán khi giao hàng</p>
                <p>Vui lòng thanh toán tiền mặt cho shipper khi nhận hàng.</p>
              </Collapse.Item>
              <Collapse.Item
                title={
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: 35, height: 35 }}
                      src="/payment/50_URoNnywsPIXSiI9G9rMLdTQ3A.png"
                      alt=""
                    />
                    <div>Chuyển khoản qua ngân hàng</div>
                  </div>
                }
              >
                <p>Chuyển khoản qua ngân hàng</p>
                <p>
                  Sau khi chọn Hoàn tất đơn hàng, vui lòng ghi nhớ Mã đơn hàng
                  và chuyển khoản vào tài khoản theo thông tin:
                </p>
                <p>Ngân hàng: XX</p>
                <p>Chi nhánh: Bến Nghé, Quận 1</p>
                <p>Số tài khoản: XXX</p>
                <p>Tên tài khoản: CT TNHH FLOWER STORE VIET NAM</p>
                <p>Nội dung chuyển khoản: [Mã đơn hàng] Bắt buộc</p>
                <p>
                  Vui lòng sử dụng hình thức chuyển tiền ngay 24/7. Đơn hàng cần
                  được chuyển khoản thanh toán trong vòng 20 phút sau khi Qúy
                  Khách đặt hàng thành công. Sau đó, bạn vui lòng gửi hình ảnh
                  hóa đơn/ giao dịch để chúng tôi xác nhận qua Fanpage Potico.vn
                  (https://www.facebook.com/potico.vn) hoặc gọi cho Hotline 1900
                  63 35 37 ngay sau khi thanh toán thành công.
                </p>
              </Collapse.Item>
              <Collapse.Item
                title={
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: 35, height: 35 }}
                      src="/payment/50_HhLpYDdXbFo37Cpe7FevEuzsN.webp"
                      alt=""
                    />
                    <div>Paypal</div>
                  </div>
                }
              >
                PayPal Chuyển tiền qua PayPal
              </Collapse.Item>
              <Collapse.Item
                title={
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: 35, height: 35 }}
                      src="/payment/momo.png"
                      alt=""
                    />
                    <div>Momo</div>
                  </div>
                }
              >
                Momo Momo
              </Collapse.Item>
              <Collapse.Item
                title={
                  <div className="d-flex align-items-center gap-2">
                    <img
                      style={{ width: 35, height: 35 }}
                      src="/payment/50_ZcV3tzUR8gcGGDps3Fmh0g83r.png"
                      alt=""
                    />
                    <div>VNPay</div>
                  </div>
                }
              >
                <p>VNPay</p>
                <p>Hỗ trợ thanh toán VNPay-QR</p>
                <p>
                  Thanh toán bằng thẻ ghi nợ/tín dụng (phát hành tại Việt Nam) -
                  VISA/JCB/Master Card
                </p>
              </Collapse.Item>
            </Collapse>
          </div>
          <div className="col-12 col-lg-4">
            <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
              Chi tiết đơn hàng
            </h2>

            <div className="d-flex payment-preview-item align-items-center justify-content-between mb-2">
              <img
                src="/payment/1.jpg"
                alt=""
                style={{ width: 70 }}
                className="border p-2 payment-preview-item__img me-2"
              />
              <div className="payment-preview-item__info">
                <div className="payment-preview-item__name">MON BEL AMOUR</div>
                <div className="payment-preview-item__price">449,000 ₫</div>
              </div>

              <div className="payment-preview-item__edit d-flex">
                <button className="btn">-</button>
                <Input placeholder="0" width={50} id="sl" />
                <button className="btn">+</button>
              </div>

              <div className="payment-preview-item__total">449,000 ₫</div>
            </div>

            <div className="d-flex payment-preview-item align-items-center justify-content-between mb-2">
              <img
                src="/payment/2.jpg"
                alt=""
                style={{ width: 70 }}
                className="border p-2 payment-preview-item__img me-2"
              />
              <div className="payment-preview-item__info">
                <div className="payment-preview-item__name">MON BEL AMOUR</div>
                <div className="payment-preview-item__price">449,000 ₫</div>
              </div>

              <div className="payment-preview-item__edit d-flex">
                <button className="btn">-</button>
                <Input placeholder="0" width={50} id="sl" />
                <button className="btn">+</button>
              </div>

              <div className="payment-preview-item__total">449,000 ₫</div>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <p className="primary-text-color">
                <strong>Tạm tính</strong>
              </p>
              <p>778,000 ₫</p>
            </div>

            <div className="d-flex justify-content-between">
              <p className="primary-text-color">
                <strong>Phí giao hàng</strong>
              </p>
              <p>+ 50,000 ₫</p>
            </div>

            <hr />

            <div className="d-flex justify-content-between">
              <p className="primary-text-color">
                <strong>Tổng</strong>
              </p>
              <p>828,000 ₫</p>
            </div>

            <hr />

            <div className="d-flex justify-content-between ">
              <div
                className="d-flex justify-content-between p-3"
                style={{ flex: 1 }}
              >
                <p>Giao hàng</p>
                <div>
                  <div>THÁNG 10 22</div>
                  <div>THỨ BẢY</div>
                </div>
              </div>
              <div
                className="d-flex justify-content-between p-3"
                style={{ flex: 1 }}
              >
                <p>
                  <strong>7h - 9h</strong>
                </p>
                <button className="btn btn--link">Thay đổi</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
