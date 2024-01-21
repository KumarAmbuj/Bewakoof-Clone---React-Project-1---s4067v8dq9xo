import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";
import { useRef, memo } from "react";

const SliderShow = () => {
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
    <div className="slider">
      <div className="sliderLeftArrow" onClick={goToPrev}>
        <i className="fa fa-angle-left" aria-hidden="true"></i>
      </div>
      <div className="sliderRightArrow" onClick={goToNext}>
        <i className="fa fa-angle-right" aria-hidden="true"></i>
      </div>
      <Slider {...settings} ref={sliderRef}>
        <div className="card">
          <Link
            to={`/product-details?search=${JSON.stringify(
              men.search
            )}&filter=${JSON.stringify(men.filter)}`}
          >
            <img
              src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GoToJackets70Off-Common-1703147023.jpg"
              alt=""
            />
          </Link>
        </div>
        <div className="card">
          <Link
            to={`/product-details?search=${JSON.stringify(
              women.search
            )}&filter=${JSON.stringify(men.filter)}`}
          >
            <img
              src="https://images.bewakoof.com/uploads/grid/app/YearEndSale-1x1-commmon-RMIK--1--1703076004.gif"
              alt=""
            />
          </Link>
        </div>
        <div className="card">
          <Link
            to={`/product-details?search=${JSON.stringify(
              fandom.search
            )}&filter=${JSON.stringify(men.filter)}`}
          >
            <img
              src="	https://images.bewakoof.com/uploads/grid/app/1x1-1703164584.gif"
              alt=""
            />
          </Link>
        </div>
        <div className="card">
          <Link
            to={`/product-details?search=${JSON.stringify(
              men.search
            )}&filter=${JSON.stringify(men.filter)}`}
          >
            <img src="/images/slider4.gif" alt="" />
          </Link>
        </div>
        <div className="card">
          <Link
            to={`/product-details?search=${JSON.stringify(
              women.search
            )}&filter=${JSON.stringify(men.filter)}`}
          >
            <img src="/images/slider5.webp" alt="" />
          </Link>
        </div>
      </Slider>
    </div>
  );
};

export default memo(SliderShow);
