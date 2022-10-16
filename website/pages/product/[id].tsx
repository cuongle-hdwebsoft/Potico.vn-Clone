import Link from "next/link";
import { useState } from "react";
import Slider from "react-slick";
import MainLayout from "../../components/MainLayout";
import Tabs from "../../components/Tabs";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Alert from "../../components/Alert";
import Card from "../../components/Card";
import Collapse from "../../components/Collapse";
import dynamic from "next/dynamic";
import Description from "../../components/Description";
import PreviewItem from "../../components/PreviewItem";
import * as uuid from "uuid";
import useToast from "../../hooks/useToast";

const Modal = dynamic(() => import("../../components/Modal"), {
  ssr: false,
});

export default function ProductDetail() {
  const [previewImageIndex, setPreviewImageIndex] = useState(1);
  const [amount, setAmount] = useState<string>("1");
  const [activeHour, setActiveHour] = useState(0);
  const [isOpenMoreInfoModal, setIsOpenMoreInfoModal] = useState(false);
  const { handleCreateToast } = useToast();

  const handleAddToCart = () => {
    handleCreateToast({
      title: "",
      content: "Bỏ vào giỏ hàng thành công",
      type: "success",
    });
  };

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
              <div className="d-flex flex-column-reverse flex-sm-row justify-content-start mb-3">
                <div className="small-list-images d-flex flex-row flex-sm-column gap-2 overflow-x-scroll overflow-x-sm-hidden mt-3 mt-sm-0">
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

              <Collapse>
                <Collapse.Item title="Mô tả">
                  <p>
                    Bó Hoa Mon Bel Amour mang gam màu hồng đầy trang nhã và
                    duyên dáng của hoa hồng với sự kết hợp của màu xanh lá tai
                    lừa và màu tím của hoa sao. Đây sẽ là món quà bất ngờ và
                    hoàn hảo dành tặng người thương, gia đình hoặc bạn bè.
                  </p>
                  <p>Bó Hoa Mon Bel Amour (Cơ Bản) bao gồm:</p>
                  <p>- 10 Bông Hoa Hồng</p>
                  <p>- Cành Tai Lừa & Các loại Hoa và Lá khác</p>
                  <p>Bó Hoa Mon Bel Amour (Đặc Biệt) bao gồm:</p>
                  <p>- 26 Bông Hoa Hồng</p>
                  <p>- Cành Tai Lừa & Các loại Hoa và Lá khác</p>
                  <p>
                    * Do mỗi sản phẩm đều được làm thủ công nên sẽ có chút khác
                    biệt so với hình ảnh sẵn có trên website.
                  </p>
                  <p>*Các Quận Nội thành áp dụng miễn phí vận chuyển:</p>
                  <p>
                    / Hà Nội: Quận Ba Đình, Hai Bà Trưng, Hoàn Kiếm, Hoàng Mai,
                    Tây Hồ, Thanh Xuân, Đống Đa, Cầu Giấy, Bắc Từ Liêm
                  </p>
                  <p>
                    / Tp.HCM: Quận 1,10, 11, 3, 4, 5, 6, 7, 8, Bình Thạnh, Phú
                    Nhuận, Tân Bình Gò Vấp, Tân Phú
                  </p>
                </Collapse.Item>
                <Collapse.Item title="Đánh giá">
                  Chưa có đánh giá nào
                </Collapse.Item>
              </Collapse>
            </div>
            <div className="col-12 col-lg-6">
              <h1 className="mt-3 mt-sm-0">MON BEL AMOUR</h1>

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

              <Description>
                <Description.Item>
                  <Description.Title>Giao đến:</Description.Title>
                  <Description.Content>
                    <div className="border-outside">
                      <select style={{ border: 0 }} className="select w-100">
                        <option>Hồ Chí Minh</option>
                        <option>Hà Nội</option>
                        <option>Khác</option>
                      </select>
                    </div>
                  </Description.Content>
                </Description.Item>

                <Description.Item>
                  <Description.Title>Chọn biến thể</Description.Title>
                  <Description.Content>
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
                  </Description.Content>
                </Description.Item>

                <Description.Item>
                  <Description.Title>Số lượng</Description.Title>
                  <Description.Content>
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
                  </Description.Content>
                </Description.Item>

                <Description.Item>
                  <Description.Title>Chọn thêm sản phẩm</Description.Title>
                  <div className="description__content">
                    <Tabs defaultActiveTabIndex={0}>
                      <Tabs.TabItem index={0} title="Tất cả">
                        <Slider
                          responsive={[
                            {
                              breakpoint: 768, // < 768
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                arrows: false,
                              },
                            },
                          ]}
                          slidesToShow={4}
                          slidesToScroll={4}
                        >
                          {Array.from({ length: 11 }).map((item, index) => {
                            return (
                              <PreviewItem
                                id={index}
                                key={uuid.v4()}
                                tab={0}
                                onClickMoreInfo={(id) =>
                                  setIsOpenMoreInfoModal(true)
                                }
                              ></PreviewItem>
                            );
                          })}
                        </Slider>
                      </Tabs.TabItem>
                      <Tabs.TabItem index={1} title="Bánh kem">
                        <Slider
                          responsive={[
                            {
                              breakpoint: 768, // < 768
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                arrows: false,
                              },
                            },
                          ]}
                          slidesToShow={1}
                          slidesToScroll={1}
                        >
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
                                  <div
                                    className="preview-item__more-info"
                                    onClick={() => setIsOpenMoreInfoModal(true)}
                                  >
                                    <i className="fa-solid fa-circle-info"></i>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </Tabs.TabItem>
                      <Tabs.TabItem index={2} title="Thiệp">
                        <Slider
                          responsive={[
                            {
                              breakpoint: 768, // < 768
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                arrows: false,
                              },
                            },
                          ]}
                          slidesToShow={4}
                          slidesToScroll={4}
                        >
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
                                  <div
                                    className="preview-item__more-info"
                                    onClick={() => setIsOpenMoreInfoModal(true)}
                                  >
                                    <i className="fa-solid fa-circle-info"></i>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </Tabs.TabItem>
                      <Tabs.TabItem index={3} title="Gấu bông">
                        <Slider
                          responsive={[
                            {
                              breakpoint: 768, // < 768
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                arrows: false,
                              },
                            },
                          ]}
                          slidesToShow={1}
                          slidesToScroll={1}
                        >
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
                                  <div
                                    className="preview-item__more-info"
                                    onClick={() => setIsOpenMoreInfoModal(true)}
                                  >
                                    <i className="fa-solid fa-circle-info"></i>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </Tabs.TabItem>
                      <Tabs.TabItem index={4} title="Khác">
                        <Slider
                          responsive={[
                            {
                              breakpoint: 768, // < 768
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                arrows: false,
                              },
                            },
                          ]}
                          slidesToShow={1}
                          slidesToScroll={1}
                        >
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
                                  <div
                                    className="preview-item__more-info"
                                    onClick={() => setIsOpenMoreInfoModal(true)}
                                  >
                                    <i className="fa-solid fa-circle-info"></i>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </Slider>
                      </Tabs.TabItem>
                      <Tabs.TabItem index={5} title="Banner">
                        <Slider
                          responsive={[
                            {
                              breakpoint: 768, // < 768
                              settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1,
                                dots: false,
                                arrows: false,
                              },
                            },
                          ]}
                          slidesToShow={1}
                          slidesToScroll={1}
                        >
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
                                  <div
                                    className="preview-item__more-info"
                                    onClick={() => setIsOpenMoreInfoModal(true)}
                                  >
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
                </Description.Item>
              </Description>

              <div className="description"></div>

              <Alert
                description={
                  <p style={{ marginBottom: 0 }}>
                    Khám phá ngay những sản phẩm Chúc Mừng Ngày Phụ Nữ Việt Nam
                    20.10{" "}
                    <Link href="/" passHref>
                      <a href="">tại đây!</a>
                    </Link>
                  </p>
                }
              ></Alert>

              <div className="description">
                <div className="description__item">
                  <div className="description__title">
                    Chọn ngày giao hàng: (Giảm thêm đến 20% cho 1 số ngày giao
                    hàng)
                  </div>
                  <div className="description__content">
                    <div className="d-flex flex-column flex-sm-row">
                      <div className="w-100 w-sm-25 mb-2 mb-sm-0">
                        <Card active={true}>
                          <div
                            style={{
                              height: 50,
                              overflow: "hidden",
                              textAlign: "center",
                            }}
                          >
                            <p>15 tháng 10</p>
                            <p>HÔM NAY</p>
                          </div>
                        </Card>
                      </div>
                      <div className="w-100 w-sm-25 mb-2 mb-sm-0">
                        <Card>
                          <div
                            style={{
                              height: 50,
                              overflow: "hidden",
                              textAlign: "center",
                            }}
                          >
                            <p>15 tháng 10</p>
                            <p>NGÀY MAI</p>
                          </div>
                        </Card>
                      </div>
                      <div className="w-100 w-sm-25 mb-2 mb-sm-0">
                        <Card>
                          <div
                            style={{
                              height: 50,
                              overflow: "hidden",
                              textAlign: "center",
                            }}
                          >
                            <p>15 tháng 10</p>
                            <p>THỨ 2</p>
                          </div>
                        </Card>
                      </div>
                      <div className="w-100 w-sm-25 mb-2 mb-sm-0">
                        <Card>
                          <div
                            style={{
                              height: 50,
                              overflow: "hidden",
                              textAlign: "center",

                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <i className="fa-solid fa-calendar-days"></i>
                          </div>
                        </Card>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="description__item">
                  <div className="description__title">
                    Chọn thời gian giao hàng
                  </div>
                  <div className="description__content">
                    <div className="d-flex flex-wrap">
                      {Array.from({ length: 12 }).map((_, index) => (
                        <div key={`card-${index}`} className="w-50 w-sm-25 p-1">
                          <Card
                            onClick={() => setActiveHour(index)}
                            active={index === activeHour}
                          >
                            <div
                              style={{
                                fontWeight: "bold",
                                textAlign: "center",
                              }}
                            >
                              {index}h-{index + 2}h
                            </div>
                          </Card>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <p className="total-price">
                <span>Tổng cộng: </span>
                <span>449,000 ₫</span>
              </p>

              <button
                onClick={handleAddToCart}
                className="btn btn--primary btn--outlined btn--large me-2 w-oxs-100 mb-2 mb-sm-0"
              >
                Thêm vào giỏ hàng
              </button>
              <button className="btn btn--primary btn--large w-oxs-100">
                Mua ngay
              </button>
            </div>
          </div>
        </div>
      </div>

      <Modal
        width={300}
        isOpen={isOpenMoreInfoModal}
        content={
          <div>
            <Slider arrows={false}>
              <div>
                <img
                  className="w-100"
                  alt=""
                  src="/product-detail/detail-modal-img/1.jpg"
                />
              </div>
              <div>
                <img
                  className="w-100"
                  alt=""
                  src="/product-detail/detail-modal-img/2.jpg"
                />
              </div>
              <div>
                <img
                  className="w-100"
                  alt=""
                  src="/product-detail/detail-modal-img/3.jpg"
                />
              </div>
              <div>
                <img
                  className="w-100"
                  alt=""
                  src="/product-detail/detail-modal-img/4.jpg"
                />
              </div>
            </Slider>

            <div
              style={{ maxHeight: 100, overflowY: "scroll" }}
              className="small-description my-3"
            >
              <p>
                Thêm phần đáng yêu cho món quà của bạn với chú gấu bông xinh xắn
                trong màu áo hoặc nâu hoặc xanh.
              </p>
              <p>Kích thước gấu: cao 30cm.</p>
              <p>* Màu áo ngẫu nhiên</p>
              <p>* Các Quận Nội thành áp dụng miễn phí vận chuyển:</p>
              <p>
                / Hà Nội: Quận Ba Đình, Hai Bà Trưng, Hoàn Kiếm, Hoàng Mai, Tây
                Hồ, Thanh Xuân, Đống Đa, Cầu Giấy, Bắc Từ Liêm
              </p>
              <p>
                / Tp.HCM: Quận 1,10, 11, 3, 4, 5, 6, 7, 8, Bình Thạnh, Phú
                Nhuận, Tân Bình, Gò Vấp, Tân Phú
              </p>
            </div>

            <button className="btn btn--primary m-auto d-block ">
              Thêm vào giỏ hàng
            </button>
          </div>
        }
        title="Gấu Bông Đáng Yêu"
        onClose={() => {
          setIsOpenMoreInfoModal(false);
        }}
      ></Modal>
    </MainLayout>
  );
}
