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
          <img
            src="https://images.bewakoof.com/uploads/grid/app/NEW-1x1-GoToJackets70Off-Common-1703147023.jpg"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="https://images.bewakoof.com/uploads/grid/app/YearEndSale-1x1-commmon-RMIK--1--1703076004.gif"
            alt=""
          />
        </div>
        <div className="card">
          <img
            src="	https://images.bewakoof.com/uploads/grid/app/1x1-1703164584.gif"
            alt=""
          />
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
