import "./sideNavbar.css";

import { AuthContext } from "../../authentication/AuthContext";

import { searchResult } from "../../Constant/constant";

import { Link, useNavigate } from "react-router-dom";

import { useContext } from "react";

function SideNavbar({ hideNavbar }) {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  }
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
      <div className="overlay" onClick={hideNavbar} />
      <div className="side">
        {!isLoggedIn ? (
          <>
            <div className="guest">Welcome Guest</div>
            <div className="loginSignup">Login / Sign Up</div>
          </>
        ) : (
          <div className="guest">Hello User</div>
        )}
        <div className="Line"></div>
        <div className="flag">
          <img src="./images/indiaFlag.png" />
          <span>India</span>
        </div>
        <div className="shopin">SHOP IN</div>
        <div className="firstMenu">
          <Link
            to={`/product-details?search=${JSON.stringify(
              men.search
            )}&filter=${JSON.stringify(men.filter)}`}
          >
            <div className="menu">
              <div className="text">Men</div>
              <div className="icon">
                <img src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png" />
              </div>
            </div>
          </Link>

          <Link
            to={`/product-details?search=${JSON.stringify(
              women.search
            )}&filter=${JSON.stringify(women.filter)}`}
          >
            <div className="menu">
              <div className="text">Women</div>
              <div className="icon">
                <img src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png" />
              </div>
            </div>
          </Link>

          <Link
            to={`/product-details?search=${JSON.stringify(
              fandom.search
            )}&filter=${JSON.stringify(fandom.filter)}`}
          >
            <div className="menu">
              <div className="text">Shop by Fandom</div>
              <div className="icon">
                <img src="https://images.bewakoof.com/nav_menu/Circle-icon-character-shop--1--1684748738.png" />
              </div>
            </div>
          </Link>

          <Link
            to={`/product-details?search=${JSON.stringify(
              customized.search
            )}&filter=${JSON.stringify(customized.filter)}`}
          >
            <div className="menu">
              <div className="text">Customize your Own T-shirt</div>
              <div className="icon">
                <img src="https://images.bewakoof.com/nav_menu/Circle-icon-customisation--1--1684748736.png" />
              </div>
            </div>
          </Link>

          <div className="menu">
            <div className="text">Mobile Covers</div>
          </div>
        </div>
        <div className="secondMenu">
          <div className="contactUs">CONTACT US</div>
          <div className="text">Help & Support</div>
          <div className="text">Feedback & Suggestions</div>
          <div className="text">Become a Seller</div>
          <div className="contactUs">ABOUT US</div>
          <div className="text">Our Story</div>
          <div className="text">Fanbook</div>
          <div className="text">Blog</div>
        </div>
        <div className="loginTextSideNavbar">
          {!isLoggedIn ? (
            <Link to="/login">Login</Link>
          ) : (
            <span onClick={handleLogout}>Logout</span>
          )}
        </div>
      </div>
    </>
  );
}
export default SideNavbar;
