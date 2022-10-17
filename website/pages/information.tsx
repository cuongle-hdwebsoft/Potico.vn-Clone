import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Card from "../components/Card";
import Input from "../components/Input";
import MainLayout from "../components/MainLayout";

export default function Information() {
  const { push } = useRouter();

  return (
    <MainLayout>
      <div className="container mt-5">
        <div className="row">
          <div className="col-12 col-lg-8">
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
              <span className="breadcumb__item">Thông tin</span>
            </div>

            <h1
              style={{ fontSize: 13, fontWeight: "bold" }}
              className="mt-3 mb-4"
            >
              Thông tin của tôi
            </h1>

            <div className="d-flex flex-wrap justify-content-between flex-column flex-sm-row">
              <Input
                id="email"
                placeholder="Mời bạn điền email"
                label="Email"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input
                id="phone"
                placeholder="Mời bạn điền số điện thoại"
                label="Số điện thoại"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input
                id="firstName"
                placeholder="Mời bạn điền tên"
                label="Tên"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input
                id="lastName"
                placeholder="Mời bạn điền họ"
                label="Họ"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />
            </div>

            <div className="d-flex mb-4">
              <input type="checkbox" className="me-2" /> Tôi muốn nhận thông tin
              và ưu đãi.
            </div>

            <p className="m">
              <strong>Người nhận</strong>
            </p>
            <div className="d-flex mb-4">
              <Card active={true} className="me-1">
                Người khác nhận hoa
              </Card>
              <Card>Tôi là người nhận</Card>
            </div>

            <h2 style={{ fontSize: "15px", fontWeight: "bold" }}>
              Thông tin người nhận
            </h2>

            <div className="d-flex flex-wrap justify-content-between flex-column flex-sm-row">
              <Input
                id="firstName"
                placeholder="Mời bạn điền tên"
                label="Tên"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input
                id="lastName"
                placeholder="Mời bạn điền họ"
                label="Họ"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input
                id="sdt"
                placeholder="Mời bạn điền số điện thoại"
                label="Số điện thoại"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />
            </div>

            <div className="d-flex flex-wrap justify-content-between">
              <Input
                id="dc"
                placeholder="Mời bạn điền địa chỉ nhà"
                label="Địa chỉ nhà"
                width="100%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input.Select
                id="khuvuc"
                label="Khu vực"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input.Select
                id="tinhthanh"
                label="Tỉnh thành"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input.Select
                id="dc"
                label="Quận huyện"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />

              <Input.Select
                id="dc"
                label="Phường"
                width="48%"
                className="mb-5 w-100 w-sm-48"
              />
            </div>

            <div className="d-flex flex-column mb-4">
              <strong>
                Tùy chọn: Lời nhắn gửi tới người nhận (Quý khách vui lòng không
                sử dụng icon)
              </strong>
              <Input.TextArea id="" />
            </div>

            <div className="d-flex flex-column  mb-4">
              <strong>Hướng dẫn cho tài xế</strong>
              <Input.TextArea id="" />
            </div>

            <strong>Người gửi ẩn danh</strong>
            <div className="d-flex mb-4">
              <input type="checkbox" className="me-2" /> Có, tôi muốn ẩn danh
              người gửi.
            </div>

            <div className="d-flex align-items-center justify-content-between position-fixed position-sm-relative bottom-0 start-0 w-100 w-sm-auto z-index-1000 mb-sm-4">
              <button className="btn btn--outlined btn--sm w-100 w-sm-auto py-3 py-sm-1">
                Tiếp tục mua sắm
              </button>
              <button
                onClick={() => push("/payment")}
                className="btn btn--primary btn--sm w-100 w-sm-auto py-3 py-sm-1"
              >
                ĐI ĐẾN THANH TOÁN
              </button>
            </div>
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
