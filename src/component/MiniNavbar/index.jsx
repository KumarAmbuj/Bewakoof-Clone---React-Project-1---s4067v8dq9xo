import "./miniNavbar.css";
import { FaShoppingBag } from "react-icons/fa";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import SideNavbar from "../SideNavBar";
function MiniNavbar() {
  const [showSideNavbar, setShowSideNavbar] = useState(false);
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
          <div className="logo">
            <img src="https://images.bewakoof.com/web/ic-web-head-bwk-primary-logo-eyes.svg" />
          </div>
        </div>
        <div className="iconMenuOption">
          <div>
            <FaMagnifyingGlass />
          </div>
          <div>
            <FaRegHeart />
          </div>
          <div>
            <FaShoppingBag style={{ cursor: "pointer" }} />
          </div>
        </div>
      </div>
      {showSideNavbar ? (
        <SideNavbar
          hideNavbar={() => {
            setShowSideNavbar(!showSideNavbar);
          }}
        />
      ) : (
        ""
      )}
    </>
  );
}
export default MiniNavbar;
