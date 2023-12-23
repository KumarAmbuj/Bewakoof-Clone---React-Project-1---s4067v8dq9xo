//import "./slider3.css";

import "./sliders3.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <>
      {/* <div className="slider2Text">Bewakoof Originals</div> */}
      <div className="slider3">
        <Slider {...settings}>
          <div className="slider3Card">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-cargo-common--2--1701959177.jpg"
              alt=""
            />
          </div>
          <div className="slider3Card">
            <img
              src="	https://images.bewakoof.com/uploads/grid/app/1x1-Year-End-Sale-Joggers-1703165020.jpg"
              alt=""
            />
          </div>
          <div className="slider3Card">
            <img
              src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GPOT-Common-NewShoot-1702819180.jpg"
              alt=""
            />
          </div>
          <div className="slider3Card">
            <img src="/images/slider31.webp" alt="" />
          </div>
          <div className="slider3Card">
            <img
              src="	https://images.bewakoof.com/uploads/grid/app/1x1-Year-End-Sale-Joggers-1703165020.jpg"
              alt=""
            />
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

export default Slider3;
