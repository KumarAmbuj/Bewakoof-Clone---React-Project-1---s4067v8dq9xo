import "./topAccessories.css";
import { topAccessoriesList } from "../../Constant/constant";
import TrendingCard from "../TrendingCard";
import { memo } from "react";
import { Link } from "react-router-dom";

function TopAccessories() {
  return (
    <div>
      <div className="topAccessoriesText">TOP ACCESSORIES</div>
      <div className="topAccessoriesCards">
        {topAccessoriesList.map((val, index) => {
          return (
            <Link to="/coming-soon" key={index}>
              <TrendingCard data={val} key={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default memo(TopAccessories);
