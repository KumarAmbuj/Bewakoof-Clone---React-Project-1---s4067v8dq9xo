import "./banner1.css";
import { Link } from "react-router-dom";
function Banner1() {
  const men = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "jeans", gender: "Men" },
  };

  const women = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "kurti", gender: "Women" },
  };

  return (
    <div className="banner1">
      <Link
        to={`/product-details?search=${JSON.stringify(
          men.search
        )}&filter=${JSON.stringify(men.filter)}`}
      >
        <img src="./images/banner1.gif" />
      </Link>
    </div>
  );
}
export default Banner1;
