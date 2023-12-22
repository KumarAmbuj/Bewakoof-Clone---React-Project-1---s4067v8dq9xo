import "./trendingCategories.css";
import { trendingList1, trendingList2 } from "../../Constant/constant";
import TrendingCard from "../TrendingCard";

import { Link } from "react-router-dom";

function TrendingCategories() {
  return (
    <div>
      <div className="trendingText">TRENDING CATEGORIES</div>
      <div className="tendingListCategory">
        {trendingList1.map((val, index) => {
          return (
            <Link
              to={`/product-details?search=${JSON.stringify(
                val.search
              )}&filter=${JSON.stringify(val.filter)}`}
              key={index}
            >
              <TrendingCard data={val} key={index} />
            </Link>
          );
        })}
      </div>
      <div className="tendingListCategory">
        {trendingList2.map((val, index) => {
          return (
            <Link
              to={`/product-details?search=${JSON.stringify(
                val.search
              )}&filter=${JSON.stringify(val.filter)}`}
              key={index}
            >
              <TrendingCard data={val} key={index} />
            </Link>
          );
        })}
      </div>
    </div>
  );
}
export default TrendingCategories;
