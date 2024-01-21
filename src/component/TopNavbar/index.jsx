import "./topNavbar.css";
import { memo } from "react";
function TopNavbar() {
  return (
    <>
      <div className="parent">
        <div className="child1">
          <ul>
            <li>Offers </li>
            <li>Fanbook </li>
            <li>Download App </li>
            <li>Tribe Membership </li>
          </ul>
        </div>
        <div className="child2">
          <ul>
            <li>Contact Us </li>
            <li>Track Order </li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default memo(TopNavbar);
