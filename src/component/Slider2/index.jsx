import "./slider2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Slider2 = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
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

  return (
    <>
      <div className="slider2Text">Bewakoof Originals</div>
      <div className="slider2">
        <Slider {...settings}>
          <div className="sliderCard">
            <Link
              to={`/product-details?search=${JSON.stringify(
                men.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img src="/images/slider21.webp" alt="" />
            </Link>
          </div>
          <div className="sliderCard">
            <Link
              to={`/product-details?search=${JSON.stringify(
                women.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img src="/images/slider22.webp" alt="" />
            </Link>
          </div>
          <div className="sliderCard">
            <Link
              to={`/product-details?search=${JSON.stringify(
                fandom.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img src="/images/slider23.webp" alt="" />
            </Link>
          </div>
          <div className="sliderCard">
            <Link
              to={`/product-details?search=${JSON.stringify(
                men.search
              )}&filter=${JSON.stringify(men.filter)}`}
            >
              <img src="/images/slider21.webp" alt="" />
            </Link>
          </div>
          <div className="sliderCard">
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
    </>
  );
};

export default Slider2;
