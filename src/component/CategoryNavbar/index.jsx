import "./categoryNavbar.css";
import { categoryNavbarList } from "../../Constant/constant";
import { Link } from "react-router-dom";
function CategoryNavbar() {
  return (
    <div className="categories">
      {categoryNavbarList.map((val, index) => {
        return (
          <Link
            to={`/product-details?search=${JSON.stringify(
              val.search
            )}&filter=${JSON.stringify(val.filter)}`}
            key={index}
          >
            <div className="categoriesMenu">{val.name}</div>
          </Link>
        );
      })}
      {/* <div>SALE</div>
      <div>WINTERWEAR</div>
      <div>MEN</div>
      <div>WOMEN</div>
      <div>ACCESSORIES</div>
      <div>HEAVY DUTY</div>
      <div>BEWAKOOF AIR</div>
      <div>OFFICIAL MERCH</div> */}
    </div>
  );
}
export default CategoryNavbar;
