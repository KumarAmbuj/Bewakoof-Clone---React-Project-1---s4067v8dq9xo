//import "./slider3.css";

import "./sliders3.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useRef, memo } from "react";

const Slider3 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  const men = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "jeans", gender: "Men" },
  };

  const women = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "kurti", gender: "Women" },
  };

  const customized = {
    name: "",
    search: { name: "printed", description: "printed" },
    filter: { subCategory: "tshirt", gender: "Men" },
  };

  const fandom = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "jogger", gender: "Men" },
  };
  var sliderRef = useRef();
  const goToNext = () => {
    sliderRef.current.slickNext();
  };
  const goToPrev = () => {
    sliderRef.current.slickPrev();
  };

  return (
    <>
      {/* <div className="slider2Text">Bewakoof Originals</div> */}
      <div className="slider3">
        <div className="slider3LeftArrow" onClick={goToPrev}>
          <i className="fa fa-angle-left" aria-hidden="true"></i>
        </div>
        <div className="slider3RightArrow" onClick={goToNext}>
          <i className="fa fa-angle-right" aria-hidden="true"></i>
        </div>
        <Slider {...settings} ref={sliderRef}>
          <div className="slider3Card">
            <Link
              to={`/product-details?search=${JSON.stringify(
                men.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img
                src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-cargo-common--2--1701959177.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="slider3Card">
            <Link
              to={`/product-details?search=${JSON.stringify(
                women.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img
                src="	https://images.bewakoof.com/uploads/grid/app/1x1-Year-End-Sale-Joggers-1703165020.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="slider3Card">
            <Link
              to={`/product-details?search=${JSON.stringify(
                fandom.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img
                src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GPOT-Common-NewShoot-1702819180.jpg"
                alt=""
              />
            </Link>
          </div>
          <div className="slider3Card">
            <Link
              to={`/product-details?search=${JSON.stringify(
                men.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img src="/images/slider31.webp" alt="" />
            </Link>
          </div>
          <div className="slider3Card">
            <Link
              to={`/product-details?search=${JSON.stringify(
                men.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img
                src="	https://images.bewakoof.com/uploads/grid/app/1x1-Year-End-Sale-Joggers-1703165020.jpg"
                alt=""
              />
            </Link>
          </div>
          {/* <div className="slider3Card">
            <img src="/images/slider32.jpg" alt="" />
          </div> */}
          {/* <div className="sliderCard">
            <img src="/images/slider21.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider5.webp" alt="" />
          </div> */}
        </Slider>
      </div>
    </>
  );
};

export default memo(Slider3);
