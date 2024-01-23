import React from "react";
import "./mobileMenuBar.css";

import { hoverSpecialList } from "../../Constant/constant";
import { hoverMobileAppleList } from "../../Constant/constant";
import { hoverMobileNothingList } from "../../Constant/constant";
import { hoverMobileXiomiList } from "../../Constant/constant";
import { hoverMobileSamsungList } from "../../Constant/constant";
import { hoverMobileOnePlusList } from "../../Constant/constant";
import { hoverMobileRealmeList } from "../../Constant/constant";
import { hoverMobileVivoList } from "../../Constant/constant";
import HoverSpecialComponent from "../HoverSpecialComponent";
import { memo } from "react";
import { Link } from "react-router-dom";

function MobileMenuBarOnHover(props) {
  const { handleMobileMenuBarOnOver, handleMobileMenuBarOnLeave } = props;
  return (
    <>
      <div
        className="menMenuBar"
        onMouseEnter={handleMobileMenuBarOnOver}
        onMouseLeave={handleMobileMenuBarOnLeave}
      >
        <div className="hoverContainer">
          <div className="hoverChild1">
            <div className="hoverChild11">
              <div className="hoverMenuHeader">Nothing</div>

              {hoverMobileNothingList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}

              <div className="hoverMenuHeader" style={{ marginTop: "50px" }}>
                Apple
              </div>
              {hoverMobileAppleList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}
            </div>
            <div className="hoverChild12">
              <div className="hoverMenuHeader">Xiaomi</div>
              {hoverMobileXiomiList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}

              <div className="hoverMenuHeader" style={{ marginTop: "50px" }}>
                Samsung
              </div>
              {hoverMobileSamsungList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}
            </div>
            <div className="hoverChild13">
              <div className="hoverMenuHeader">Oneplus</div>
              {hoverMobileOnePlusList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}

              <div className="hoverMenuHeader" style={{ marginTop: "30px" }}>
                Realme
              </div>
              {hoverMobileRealmeList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}

              <div className="hoverMenuHeader" style={{ marginTop: "30px" }}>
                Vivo
              </div>
              {hoverMobileVivoList.map((val, index) => {
                return (
                  <div className="hoverMenuItem" key={index}>
                    <Link to="/coming-soon">{val}</Link>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="hoverChild2">
            <div className="hoverMenuItem" style={{ marginBottom: "20px" }}>
              Special
            </div>
            {hoverSpecialList.map((val, index) => {
              return <HoverSpecialComponent data={val} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default memo(MobileMenuBarOnHover);
