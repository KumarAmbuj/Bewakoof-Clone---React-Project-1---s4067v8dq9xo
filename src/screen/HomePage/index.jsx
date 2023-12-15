import { Carousel } from "react-responsive-carousel";
import CategoryNavbar from "../../component/CategoryNavbar";
// import MiddleNavbar from "../../component/MiddleNavbar";
// import MiniNavbar from "../../component/MiniNavbar";
// import TopNavbar from "../../component/TopNavbar";
import SliderShow from "../../component/Slider";
import "./homepage.css";
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
// import Footer from "../../component/Footer";
// import MenMenuBarOnHover from "../../component/MenMenuBarOnHover";
// import WomenMenuBarOnHover from "../../component/WomenMenuBarOnHover";
import { useState } from "react";
import Home from "../Home";

function HomePage() {
  // const [menMenuBar, setMenMenuBar] = useState(false);
  // const [womenMenuBar, setWomenMenuBar] = useState(false);
  // const [mobileMenuBar, setMobileMenuBar] = useState(false);
  // function menMenuOnMouseOver() {
  //   setMenMenuBar(true);
  // }
  // function menMenuOnMouseLeave() {
  //   setMenMenuBar(false);
  // }
  // function womenMenuOnMouseOver() {
  //   setWomenMenuBar(true);
  // }
  // function womenMenuOnMouseLeave() {
  //   setWomenMenuBar(false);
  // }
  // function mobileMenuOnMouseOver() {
  //   setMobileMenuBar(true);
  // }
  // function mobileMenuOnMouseLeave() {
  //   setMobileMenuBar(false);
  // }
  return (
    <div className="container">
      {/* <TopNavbar /> */}
      {/* <MiddleNavbar
      // handleMenMenuBarOnOver={menMenuOnMouseOver}
      // handleMenMenuBarOnLeave={menMenuOnMouseLeave}
      // handleWomenMenuBarOnLeave={womenMenuOnMouseLeave}
      // handleWomenMenuBarOnOver={womenMenuOnMouseOver}
      // handleMobileBarOnOver={mobileMenuOnMouseOver}
      // handleMobileBarOnLeave={mobileMenuOnMouseLeave}
      /> */}
      {/* <MiniNavbar /> */}
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
      <Banner4 />
      {/* <Footer /> */}
      {/* {menMenuBar ? (
        <MenMenuBarOnHover
          handleMenMenuBarOnLeave={menMenuOnMouseLeave}
          handleMenMenuBarOnOver={menMenuOnMouseOver}
        />
      ) : (
        ""
      )}

      {womenMenuBar ? (
        <WomenMenuBarOnHover
          handleWomenMenuBarOnLeave={womenMenuOnMouseLeave}
          handleWomenMenuBarOnOver={womenMenuOnMouseOver}
        />
      ) : (
        ""
      )} */}
    </div>
  );
}
export default HomePage;
