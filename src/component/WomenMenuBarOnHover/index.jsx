import React from "react";
import "./womenMenubar.css";
import { memo } from "react";

import { hoverWomenTopWearMenu } from "../../Constant/constant";
import { hoverWomenBottomWearMenu } from "../../Constant/constant";
import { hoverMenAccessories } from "../../Constant/constant";
import { hoverWomenWinterWearList } from "../../Constant/constant";
import { hoverMenFootWearList } from "../../Constant/constant";
import { hoverWomenPlusSizeList } from "../../Constant/constant";
import { hoverWomenLoungeWearList } from "../../Constant/constant";
import { hoverSpecialList } from "../../Constant/constant";
import HoverSpecialComponent from "../HoverSpecialComponent";
import { useNavigate, useParams, Link } from "react-router-dom";

function WomenMenuBarOnHover(props) {
  const { handleWomenMenuBarOnOver, handleWomenMenuBarOnLeave } = props;
  return (
    <div
      className="womenMenuBar"
      onMouseEnter={handleWomenMenuBarOnOver}
      onMouseLeave={handleWomenMenuBarOnLeave}
    >
      <div className="hoverContainer">
        <div className="hoverChild1">
          <div className="hoverChild11">
            <div className="hoverMenuHeader">Topwear</div>

            {hoverWomenTopWearMenu.map((val, index) => {
              return (
                <Link
                  to={`/product-details?search=${JSON.stringify(
                    val.search
                  )}&filter=${JSON.stringify(val.filter)}`}
                  className="hoverMenuItem"
                  key={index}
                >
                  {val.name}
                </Link>
              );
            })}

            <div className="hoverMenuHeader" style={{ marginTop: "30px" }}>
              Plus Size
            </div>
            {hoverWomenPlusSizeList.map((val, index) => {
              return (
                <Link
                  to={`/product-details?search=${JSON.stringify(
                    val.search
                  )}&filter=${JSON.stringify(val.filter)}`}
                  className="hoverMenuItem"
                  key={index}
                >
                  {val.name}
                </Link>
              );
            })}
          </div>
          <div className="hoverChild12">
            <div className="hoverMenuHeader">Bottomwear</div>
            {hoverWomenBottomWearMenu.map((val, index) => {
              return (
                <Link
                  to={`/product-details?search=${JSON.stringify(
                    val.search
                  )}&filter=${JSON.stringify(val.filter)}`}
                  className="hoverMenuItem"
                  key={index}
                >
                  {val.name}
                </Link>
              );
            })}

            <div className="hoverMenuHeader" style={{ marginTop: "30px" }}>
              Innerwear & Loungewear
            </div>
            {hoverWomenLoungeWearList.map((val, index) => {
              return (
                <Link
                  to={`/product-details?search=${JSON.stringify(
                    val.search
                  )}&filter=${JSON.stringify(val.filter)}`}
                  className="hoverMenuItem"
                  key={index}
                >
                  {val.name}
                </Link>
              );
            })}
          </div>
          <div className="hoverChild13">
            <div className="hoverMenuHeader">Winterwear</div>
            {hoverWomenWinterWearList.map((val, index) => {
              return (
                <Link
                  to={`/product-details?search=${JSON.stringify(
                    val.search
                  )}&filter=${JSON.stringify(val.filter)}`}
                  className="hoverMenuItem"
                  key={index}
                >
                  {val.name}
                </Link>
              );
            })}

            <div className="hoverMenuHeader" style={{ marginTop: "30px" }}>
              Footwear
            </div>
            {hoverMenFootWearList.map((val, index) => {
              return (
                <div className="hoverMenuItem" key={index}>
                  {val}
                </div>
              );
            })}

            <div className="hoverMenuHeader" style={{ marginTop: "50px" }}>
              Accessories
            </div>
            {hoverMenAccessories.map((val, index) => {
              return (
                <div className="hoverMenuItem" key={index}>
                  {val}
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
  );
}

export default memo(WomenMenuBarOnHover);
