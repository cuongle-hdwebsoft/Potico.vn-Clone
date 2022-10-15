import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import MainLayout from "../../components/MainLayout";
import Tabs from "../../components/Tabs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function ProductDetail() {
  const [previewImageIndex, setPreviewImageIndex] = useState(1);
  const [amount, setAmount] = useState<string>("1");

  console.log("render");

  return (
    <MainLayout>
      <div className="product-detail">
        <div className="container">
          <div className="breadcumb">
            <span className="breadcumb__item">
              <Link href="/">Trang chủ</Link>
            </span>
            <span className="divider">
              <i className="fa-solid fa-greater-than"></i>
            </span>
            <span className="breadcumb__item">Mon Bel Amour</span>
          </div>
          <div className="row mt-3">
            <div className="col-12 col-lg-6">
              <div className="d-md-flex justify-content-start">
                <div className="small-list-images d-flex flex-column gap-2">
                  {Array.from({ length: 4 }).map((_, index) => {
                    return (
                      <img
                        onClick={() => setPreviewImageIndex(index + 1)}
                        className={
                          index + 1 === previewImageIndex ? "active" : ""
                        }
                        key={`preview-image-${index}`}
                        src={`/product-detail/${index + 1}.jpg`}
                        alt=""
                      />
                    );
                  })}
                </div>
                <img
                  src={`/product-detail/${previewImageIndex}-large.jpg`}
                  alt=""
                  className="large-image ms-3 d-block"
                />
              </div>
            </div>
            <div className="col-12 col-lg-6">
              <h1>MON BEL AMOUR</h1>

              <div className="d-flex justify mt-3">
                <div className="group-star">
                  <i
                    style={{ color: "orange" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "orange" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "orange" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "orange" }}
                    className="fa-solid fa-star"
                  ></i>
                  <i
                    style={{ color: "orange" }}
                    className="fa-solid fa-star"
                  ></i>
                  <span style={{ color: "orange", marginLeft: 5 }}>4.9</span>
                </div>
                <div className="price">
                  <div className="actual-price">449,000 ₫</div>
                  <del className="discount-price">499,000 ₫</del>
                </div>
              </div>

              <div className="description">
                <div className="description__item">
                  <div className="description__title">Giao đến:</div>
                  <div className="description__content">
                    <div className="border-outside">
                      <select style={{ border: 0 }} className="select w-100">
                        <option>Hồ Chí Minh</option>
                        <option>Hà Nội</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className="description__item">
                  <div className="description__title">Chọn biến thể</div>
                  <div className="description__content">
                    <div className="d-flex gap-2">
                      <div className="variant-product-selection active">
                        <img src="/product-detail/1-small-1.jpg" alt="" />
                        <span>Cơ bản</span>
                      </div>
                      <div className="variant-product-selection">
                        <img src="/product-detail/1-small-2.jpg" alt="" />
                        <span>Cao cấp</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description__item">
                  <div className="description__title">Số lượng</div>
                  <div className="description__content">
                    <div className="d-flex">
                      <button
                        onClick={() =>
                          setAmount(String(Math.max(1, parseInt(amount) - 1)))
                        }
                        className="btn primary-text-color fw-bold"
                      >
                        -
                      </button>
                      <input
                        type="text"
                        className="input amount-input primary-text-color"
                        value={amount}
                        onChange={(e) => {
                          setAmount(e.target.value);
                        }}
                        onBlur={() => {
                          if (isNaN(parseInt(amount))) {
                            setAmount("1");
                          } else {
                            setAmount(String(parseInt(amount, 10)));
                          }
                        }}
                      />
                      <button
                        onClick={() =>
                          setAmount(String(Math.min(99, parseInt(amount) + 1)))
                        }
                        className="btn primary-text-color"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>

                <div className="description__item">
                  <div className="description__title">Chọn thêm sản phẩm</div>
                  <Tabs defaultActiveTabIndex={0}>
                    <Tabs.TabItem index={0} title="Tất cả">
                      <Slider slidesToShow={4} slidesToScroll={4}>
                        {Array.from({ length: 11 }).map((item, index) => {
                          return (
                            <div
                              className="preview-item"
                              key={`tab-item-image-0-${index}`}
                            >
                              <div className="preview-item__wrapper">
                                <div className="preview-item__title">
                                  Product title
                                </div>
                                <img
                                  className="preview-item__image"
                                  style={{ width: "100%" }}
                                  src={`/product-detail/accessories/tab0/${
                                    index + 1
                                  }.jpg `}
                                  alt=""
                                />
                                <div className="preview-item__price">
                                  19.000 đ
                                </div>
                                <div className="preview-item__more-info">
                                  <i className="fa-solid fa-circle-info"></i>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </Tabs.TabItem>
                    <Tabs.TabItem index={1} title="Bánh kem">
                      <Slider slidesToShow={1} slidesToScroll={1}>
                        {Array.from({ length: 1 }).map((item, index) => {
                          return (
                            <div
                              className="preview-item"
                              key={`tab-item-image-1-${index}`}
                            >
                              <div className="preview-item__wrapper">
                                <div className="preview-item__title">
                                  Product title
                                </div>
                                <img
                                  className="preview-item__image"
                                  style={{ width: "100%" }}
                                  src={`/product-detail/accessories/tab1/${
                                    index + 1
                                  }.jpg `}
                                  alt=""
                                />
                                <div className="preview-item__price">
                                  19.000 đ
                                </div>
                                <div className="preview-item__more-info">
                                  <i className="fa-solid fa-circle-info"></i>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </Tabs.TabItem>
                    <Tabs.TabItem index={2} title="Thiệp">
                      <Slider slidesToShow={4} slidesToScroll={4}>
                        {Array.from({ length: 6 }).map((item, index) => {
                          return (
                            <div
                              className="preview-item"
                              key={`tab-item-image-2-${index}`}
                            >
                              <div className="preview-item__wrapper">
                                <div className="preview-item__title">
                                  Product title
                                </div>
                                <img
                                  className="preview-item__image"
                                  style={{ width: "100%" }}
                                  src={`/product-detail/accessories/tab2/${
                                    index + 1
                                  }.jpg `}
                                  alt=""
                                />
                                <div className="preview-item__price">
                                  19.000 đ
                                </div>
                                <div className="preview-item__more-info">
                                  <i className="fa-solid fa-circle-info"></i>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </Tabs.TabItem>
                    <Tabs.TabItem index={3} title="Gấu bông">
                      <Slider slidesToShow={1} slidesToScroll={1}>
                        {Array.from({ length: 1 }).map((item, index) => {
                          return (
                            <div
                              className="preview-item"
                              key={`tab-item-image-2-${index}`}
                            >
                              <div className="preview-item__wrapper">
                                <div className="preview-item__title">
                                  Product title
                                </div>
                                <img
                                  className="preview-item__image"
                                  style={{ width: "100%" }}
                                  src={`/product-detail/accessories/tab3/${
                                    index + 1
                                  }.jpg `}
                                  alt=""
                                />
                                <div className="preview-item__price">
                                  19.000 đ
                                </div>
                                <div className="preview-item__more-info">
                                  <i className="fa-solid fa-circle-info"></i>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </Tabs.TabItem>
                    <Tabs.TabItem index={4} title="Khác">
                      <Slider slidesToShow={1} slidesToScroll={1}>
                        {Array.from({ length: 1 }).map((item, index) => {
                          return (
                            <div
                              className="preview-item"
                              key={`tab-item-image-5-${index}`}
                            >
                              <div className="preview-item__wrapper">
                                <div className="preview-item__title">
                                  Product title
                                </div>
                                <img
                                  className="preview-item__image"
                                  style={{ width: "100%" }}
                                  src={`/product-detail/accessories/tab4/${
                                    index + 1
                                  }.jpg `}
                                  alt=""
                                />
                                <div className="preview-item__price">
                                  19.000 đ
                                </div>
                                <div className="preview-item__more-info">
                                  <i className="fa-solid fa-circle-info"></i>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </Tabs.TabItem>
                    <Tabs.TabItem index={5} title="Banner">
                      <Slider slidesToShow={1} slidesToScroll={1}>
                        {Array.from({ length: 1 }).map((item, index) => {
                          return (
                            <div
                              className="preview-item"
                              key={`tab-item-image-6-${index}`}
                            >
                              <div className="preview-item__wrapper">
                                <div className="preview-item__title">
                                  Product title
                                </div>
                                <img
                                  className="preview-item__image"
                                  style={{ width: "100%" }}
                                  src={`/product-detail/accessories/tab5/${
                                    index + 1
                                  }.jpg `}
                                  alt=""
                                />
                                <div className="preview-item__price">
                                  19.000 đ
                                </div>
                                <div className="preview-item__more-info">
                                  <i className="fa-solid fa-circle-info"></i>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </Slider>
                    </Tabs.TabItem>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
