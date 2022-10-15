import React from "react";
import MainLayout from "../../components/MainLayout";
import ProductSection from "../../components/ProductSection";

export default function index() {
  console.log("render");

  return (
    <MainLayout>
      <div className="campaign">
        <div className="container">
          <h1 style={{ textAlign: "center" }} className="mb-5">
            Chúc Mừng Ngày Phụ Nữ Việt Nam
          </h1>

          <div className="d-flex gap-2 flex-column flex-md-row">
            <select className="select">
              <option value="">Liên quan nhất</option>
              <option value="">Mới nhất</option>
              <option value="">Giá từ thấp đến cáo</option>
              <option value="">Giá từ cao đến thấp</option>
            </select>

            <select className="select">
              <option value="">Mức giá</option>
              <option value="">Giá từ thấp đến cáo</option>
              <option value="">Giá từ cao đến thấp</option>
            </select>

            <div className="input-group d-flex">
              <input
                placeholder="Tìm kiếm sản phẩm..."
                type="text"
                className="input"
                style={{ flex: 1, maxWidth: 430 }}
              />
              <button className="btn btn--primary">Tìm kiếm</button>
            </div>
          </div>

          <ProductSection title="" startIndex={0} total={24}></ProductSection>
        </div>
      </div>
    </MainLayout>
  );
}
