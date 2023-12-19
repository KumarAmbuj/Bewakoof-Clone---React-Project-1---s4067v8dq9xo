import "./bestSellerSlider.css";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import ProductCard from "../ProductCard";

function BestSellerSlider() {
  const [productData, setProductData] = useState([]);

  const men = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "shirt" },
  };

  async function getProductAPI() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products`,
        {
          method: "GET",

          headers: {
            projectId: "zl6mct4l5ib6",
          },
        }
      );
      let resultResponse = await result.json();
      //console.log(resultResponse);
      //navigate("/wishlist");

      //console.log(result);
      if (resultResponse.status === "success") {
        setProductData(resultResponse.data);
        console.log(productData);
        //navigate("/cart");
      } else {
        navigate("/");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/");
    }
  }

  useEffect(() => {
    getProductAPI();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
  };

  return (
    <div>
      <div className="bestSellerHeading">BESTSELLERS</div>

      <div className="slider2">
        <Slider {...settings}>
          {/* <div className="sliderCard">
            <img src="/images/slider31.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider32.jpg" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider33.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider31.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider32.jpg" alt="" />
          </div> */}
          {/* <div className="sliderCard">
            <img src="/images/slider21.webp" alt="" />
          </div>
          <div className="sliderCard">
            <img src="/images/slider5.webp" alt="" />
          </div> */}
          {productData.length > 0 &&
            productData.map((val) => {
              return (
                <ProductCard
                  data={val}
                  slider={{ width: "85%" }}
                  key={val._id}
                />
              );
            })}
        </Slider>
      </div>

      <Link
        to={`/product-details?search=${JSON.stringify(
          men.search
        )}&filter=${JSON.stringify(men.filter)}`}
      >
        <div className="exploreAll">Explore All</div>
      </Link>
    </div>
  );
}
export default BestSellerSlider;
