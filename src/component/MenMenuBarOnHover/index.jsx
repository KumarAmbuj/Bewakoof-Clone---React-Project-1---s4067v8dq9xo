import React from "react";
import "./menMenuBar.css";
import { hoverMenTopWearMenu } from "../../Constant/constant";
import { hoverMenBottomWearMenu } from "../../Constant/constant";
import { hoverMenAccessories } from "../../Constant/constant";
import { hoverMenWinterWearList } from "../../Constant/constant";
import { hoverMenFootWearList } from "../../Constant/constant";
import { hoverMenPlusSizeList } from "../../Constant/constant";
import { hoverMenLoungeWearList } from "../../Constant/constant";
import { hoverSpecialList } from "../../Constant/constant";
import HoverSpecialComponent from "../HoverSpecialComponent";
import { useNavigate, useParams, Link } from "react-router-dom";
import { memo } from "react";

function MenMenuBarOnHover(props) {
  const { handleMenMenuBarOnOver, handleMenMenuBarOnLeave } = props;
  const navigate = useNavigate();
  function moveToProductDetails(val) {
    //console.log(val);
    const path = val.toLowerCase().split(" ").join("-");
    navigate(`/product-details`);
  }
  return (
    <>
      <div
        className="menMenuBar"
        onMouseEnter={handleMenMenuBarOnOver}
        onMouseLeave={handleMenMenuBarOnLeave}
      >
        <div className="hoverContainer">
          <div className="hoverChild1">
            <div className="hoverChild11">
              <div className="hoverMenuHeader">Topwear</div>

              {hoverMenTopWearMenu.map((val, index) => {
                return (
                  // <Link
                  //   to={{
                  //     pathname: `/product-details?search=${JSON.stringify(
                  //       val.search
                  //     )}&filter=${JSON.stringify(val.filter)}`,
                  //     state: { category: val.name },
                  //   }}
                  //   className="hoverMenuItem"
                  //   key={index}
                  // >
                  //   {val.name}
                  // </Link>
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
              {hoverMenBottomWearMenu.map((val, index) => {
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
            <div className="hoverChild13">
              <div className="hoverMenuHeader">Winterwear</div>
              {hoverMenWinterWearList.map((val, index) => {
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

              <div className="hoverMenuHeader" style={{ marginTop: "30px" }}>
                Plus Size
              </div>
              {hoverMenPlusSizeList.map((val, index) => {
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
              {hoverMenLoungeWearList.map((val, index) => {
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

export default memo(MenMenuBarOnHover);
