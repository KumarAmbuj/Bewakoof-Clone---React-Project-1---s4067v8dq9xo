import "./categoriesToBag.css";
import { categoriesToBagList } from "../../Constant/constant";
// import CategoryCard from "../CategoryCard";
import TrendingCard from "../TrendingCard";
import { memo } from "react";

import { Link } from "react-router-dom";

function CategoriesToBag() {
  return (
    <div>
      <div className="categoriesToBagText">CATEGORIES YOU CAN ADD TO BAG</div>
      <div className="categoriesToBagCards">
        {categoriesToBagList.map((val, index) => {
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
export default memo(CategoriesToBag);
