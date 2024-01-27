import CategoryNavbar from "../../component/CategoryNavbar";
import SliderShow from "../../component/Slider";
import CategoryList from "../../component/CategoryList";
import Banner1 from "../../component/Banner1";
import Banner2 from "../../component/Banner2";
import TrendingCategories from "../../component/TrendingCategories";
import Banner3 from "../../component/Banner3";
import CategoriesToBag from "../../component/CategoriesToBag";
import TopAccessories from "../../component/TopAccessories";
import Banner4 from "../../component/Banner4";
import Slider2 from "../../component/Slider2";
import Slider3 from "../../component/Slider3";
import BestSellerSlider from "../../component/BestSellerSlider";
import Loader from "../../component/Loader";

import { useState, useEffect } from "react";

function Homepage() {
  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="container">
      {isLoader ? <Loader /> : ""}

      <CategoryNavbar />
      <SliderShow />
      <CategoryList />
      <Banner1 />
      <Banner2 />
      <TrendingCategories />
      <Slider2 />
      <Banner3 />
      <CategoriesToBag />
      <Slider3 />
      <TopAccessories />
      <BestSellerSlider />
      <Banner4 />
    </div>
  );
}
export default Homepage;
