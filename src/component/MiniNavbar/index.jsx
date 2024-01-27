import "./miniNavbar.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import { memo } from "react";
import SideNavbar from "../SideNavbar";
import { AuthContext } from "../../authentication/AuthContext";
import { searchResult } from "../../Constant/constant";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";

function MiniNavbar() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);

  const { isLoggedIn, logout, wishlistData, cartData } =
    useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <>
      <div className="miniNavbar">
        <div className="miniLogo">
          <div className="miniIcon">
            <img
              src="https://images.bewakoof.com/web/ic-web-head-hamburger.svg"
              onClick={() => {
                setShowSideNavbar(!showSideNavbar);
              }}
            />
          </div>
          <Link to="/">
            <div className="logo">
              <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" />
            </div>
          </Link>
        </div>
        <div className="iconMenuOption">
          <div>
            <FaMagnifyingGlass />
          </div>
          <div style={{ position: "relative" }}>
            {wishlistData?.length > 0 ? (
              <div className="itemCount">{wishlistData?.length}</div>
            ) : (
              ""
            )}
            <Link to={isLoggedIn ? "/wishlist" : "/login"}>
              {" "}
              {/* <FaRegHeart /> */}
              <i className="fa fa-heart-o"></i>
            </Link>
          </div>
          <div style={{ position: "relative" }}>
            {cartData?.length > 0 ? (
              <div className="itemCount">{cartData?.length}</div>
            ) : (
              ""
            )}
            <Link to={isLoggedIn ? "/cart" : "/login"}>
              {" "}
              {/* <FaShoppingBag style={{ cursor: "pointer" }} /> */}
              <img
                src="/images/shoppingBag.png"
                style={{ height: "24px", width: "24px" }}
              />
            </Link>
          </div>
        </div>
      </div>
      {showSideNavbar ? (
        <SideNavbar
          hideNavbar={() => {
            setShowSideNavbar(!showSideNavbar);
          }}
          isOpen={showSideNavbar}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default memo(MiniNavbar);
