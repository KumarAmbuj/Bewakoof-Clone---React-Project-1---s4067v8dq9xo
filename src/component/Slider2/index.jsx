import "./slider2.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <>
      <div className="slider2Text">Bewakoof Originals</div>
      <div className="slider2">
        <Slider {...settings}>
          <div className="sliderCard">
            <img src="/images/slider21.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider22.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider23.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider21.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider5.webp" alt="" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default Slider2;
