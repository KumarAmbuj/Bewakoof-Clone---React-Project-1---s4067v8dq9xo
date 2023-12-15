import CategoryCard from "../CategoryCard";
import "./categoryList.css";
import { Link } from "react-router-dom";
import { categoryListArr } from "../../Constant/constant";
function CategoryList() {
  // console.log(categoryListArr);
  return (
    <div className="categoryList">
      {categoryListArr.map((val, index) => {
        // return <CategoryCard data={val} key={index} />;
        return (
          <Link
            to={`/product-details?search=${JSON.stringify(
              val.search
            )}&filter=${JSON.stringify(val.filter)}`}
            key={index}
          >
            <CategoryCard data={val} key={index} />
          </Link>
        );
      })}
    </div>
  );
}
export default CategoryList;
