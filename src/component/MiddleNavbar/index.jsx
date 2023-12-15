import { useState, useContext } from "react";
import "./middleNavbar.css";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import MenMenuBarOnHover from "../MenMenuBarOnHover";
import WomenMenuBarOnHover from "../WomenMenuBarOnHover";
import MobileMenuBarOnHover from "../MobileMenuOnHover";
import { AuthContext } from "../../authentication/AuthContext";

import { Link } from "react-router-dom";

function MiddleNavbar() {
  const [menMenuBar, setMenMenuBar] = useState(false);
  const [womenMenuBar, setWomenMenuBar] = useState(false);
  const [mobileMenuBar, setMobileMenuBar] = useState(false);
  const { isLoggedIn } = useContext(AuthContext);
  console.log(isLoggedIn);

  function menMenuOnMouseOver() {
    setMenMenuBar(true);
  }
  function menMenuOnMouseLeave() {
    setMenMenuBar(false);
  }
  function womenMenuOnMouseOver() {
    setWomenMenuBar(true);
  }
  function womenMenuOnMouseLeave() {
    setWomenMenuBar(false);
  }
  function mobileMenuOnMouseOver() {
    setMobileMenuBar(true);
    // console.log(mobileMenuBar);
  }
  function mobileMenuOnMouseLeave() {
    setMobileMenuBar(false);
    // console.log(mobileMenuBar);
  }
  return (
    <>
      <div className="middleParent">
        <div className="middleChild1">
          <div className="logo">
            <Link to="/">
              {" "}
              <img src="./images/logo.svg" />
            </Link>
          </div>
          <div
            className="middleNavbarMenu"
            onMouseOver={menMenuOnMouseOver}
            onMouseLeave={menMenuOnMouseLeave}
          >
            MEN
          </div>
          <div
            className="middleNavbarMenu"
            onMouseOver={womenMenuOnMouseOver}
            onMouseLeave={womenMenuOnMouseLeave}
          >
            WOMEN
          </div>
          <div
            className="middleNavbarMenu"
            onMouseOver={mobileMenuOnMouseOver}
            onMouseLeave={mobileMenuOnMouseLeave}
          >
            MOBILE COVERS
          </div>
        </div>
        <div className="middleChild2">
          <div className="searchBar">
            <div className="searchIcon">
              <FaSearch />
            </div>
            <input placeholder="Search by product, category or collection"></input>
          </div>
          <div className="line"></div>
          <div className="login">
            <Link to="/signup">Login</Link>
          </div>
          <div className="heart">
            <FaRegHeart />
          </div>
          <div className="shoppingBag">
            <Link to={isLoggedIn ? "/cart" : "/login"}>
              <FaShoppingBag />
            </Link>
          </div>
          <div className="flag">
            <img src="./images/indiaFlag.png" />
          </div>
        </div>
      </div>
      {menMenuBar ? (
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
      )}

      {mobileMenuBar ? (
        <MobileMenuBarOnHover
          handleMobileMenuBarOnLeave={mobileMenuOnMouseLeave}
          handleMobileMenuBarOnOver={mobileMenuOnMouseOver}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default MiddleNavbar;
