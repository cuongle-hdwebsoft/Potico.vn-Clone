/* eslint-disable @next/next/no-img-element */
import type { NextPage } from "next";
import MainLayout from "../components/MainLayout";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardProduct from "../components/ProductCard";

const Home: NextPage = () => {
  return (
    <MainLayout>
      <div className="container mt-2">
        <div className="row d-flex align-items-center">
          <div className="col-lg-9 col-xl-6">
            <Slider
              infinite={true}
              speed={500}
              slidesToShow={1}
              slidesToScroll={1}
              arrows={true}
              autoplay={true}
            >
              <div>
                <img
                  className="carousel-image h-md-auto"
                  src="/carousel/2.jpg"
                  alt=""
                />
              </div>
              <div>
                <img className="carousel-image" src="/carousel/1.jpg" alt="" />
              </div>
              <div>
                <img className="carousel-image" src="/carousel/3.jpg" alt="" />
              </div>
            </Slider>
          </div>
          <div className="col-lg-0 d-none d-xl-block col-xl-3">
            <div className="banner">
              <div className="d-flex flex-column justify-content-between align-items-center">
                <img
                  className="banner__image"
                  style={{ width: "100%" }}
                  src="/banner/747_Q3IeBYVpVrItpM665wMOuqJBi.jpg"
                  alt=""
                />
                <img
                  className="banner__image"
                  style={{ width: "100%" }}
                  src="/banner/747_WChe4dTHDIJPzB0KISxVsooSt.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-lg-3 d-none d-lg-block col-xl-3">
            <CardProduct></CardProduct>
          </div>
        </div>
      </div>

      <div className="breakline"></div>
    </MainLayout>
  );
};

export default Home;
