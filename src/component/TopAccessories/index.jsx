import "./topAccessories.css";
import { topAccessoriesList } from "../../Constant/constant";
import TrendingCard from "../TrendingCard";
function TopAccessories() {
  return (
    <div>
      <div className="topAccessoriesText">TOP ACCESSORIES</div>
      <div className="topAccessoriesCards">
        {topAccessoriesList.map((val, index) => {
          return <TrendingCard data={val} key={index} />;
        })}
      </div>
    </div>
  );
}
export default TopAccessories;
