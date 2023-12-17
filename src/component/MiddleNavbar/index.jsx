import { useState, useContext, useEffect } from "react";
import "./middleNavbar.css";
import { FaSearch } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import MenMenuBarOnHover from "../MenMenuBarOnHover";
import WomenMenuBarOnHover from "../WomenMenuBarOnHover";
import MobileMenuBarOnHover from "../MobileMenuOnHover";
import SearchResultComponent from "../SearchResultComponent";

import { AuthContext } from "../../authentication/AuthContext";

import { searchResult } from "../../Constant/constant";

import { Link, useNavigate } from "react-router-dom";

function MiddleNavbar() {
  const [menMenuBar, setMenMenuBar] = useState(false);
  const [womenMenuBar, setWomenMenuBar] = useState(false);
  const [mobileMenuBar, setMobileMenuBar] = useState(false);
  const [searchResultData, setSearchResultData] = useState([]);
  const { isLoggedIn, logout } = useContext(AuthContext);
  //console.log(isLoggedIn);
  const navigate = useNavigate();

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

  function handleLogout() {
    logout();
    navigate("/");
  }

  function handleSearch(e) {
    //console.log(e.target.value);
    let x = e.target.value;
    let arr = [];
    if (x.length >= 3) {
      arr = searchResult.filter((val) => {
        return (
          val.name.toLowerCase().search(x.toLowerCase()) >= 0 ||
          val.filter.subCategory.toLowerCase().search(x.toLowerCase()) >= 0
        );
      });
      //console.log(arr);
      setSearchResultData(arr);
    } else {
      setSearchResultData([]);
    }
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
            <input
              placeholder="Search by product, category or collection"
              onChange={handleSearch}
            ></input>
          </div>
          <div className="line"></div>
          <div className="login">
            {!isLoggedIn ? (
              <Link to="/signup">Login</Link>
            ) : (
              <span onClick={handleLogout}>Logout</span>
            )}
          </div>
          <div className="heart">
            <Link to={isLoggedIn ? "/wishlist" : "/login"}>
              <FaRegHeart />
            </Link>
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
      {searchResultData.length > 0 ? (
        <SearchResultComponent data={searchResultData} />
      ) : (
        ""
      )}
    </>
  );
}
export default MiddleNavbar;
