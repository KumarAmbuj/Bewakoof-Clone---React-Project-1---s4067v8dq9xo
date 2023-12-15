import "./slider.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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

  return (
    <div className="slider">
      <Slider {...settings}>
        <div className="card">
          <img src="/images/slider1.jpg" alt="" />
        </div>
        <div className="card">
          <img src="/images/slider2.webp" alt="" />
        </div>
        <div className="card">
          <img src="/images/slider3.webp" alt="" />
        </div>
        <div className="card">
          <img src="/images/slider4.gif" alt="" />
        </div>
        <div className="card">
          <img src="/images/slider5.webp" alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderShow;
