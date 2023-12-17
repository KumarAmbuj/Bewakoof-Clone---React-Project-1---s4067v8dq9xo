import "./searchResult.css";
import { Link } from "react-router-dom";

function SearchResultComponent(props) {
  return (
    <div className="searchResult">
      {props.data.slice(0, 5).map((val, index) => {
        return (
          <>
            <Link
              to={`/product-details?search=${JSON.stringify(
                val.search
              )}&filter=${JSON.stringify(val.filter)}`}
              key={index}
            >
              <div className="link">{val.name}</div>
            </Link>
          </>
        );
      })}

      {/* <div className="link">Women's Shirt</div>
      <div className="link">Men's Shirt</div>
      <div className="link">Women's Shirt</div>
      <div className="link">Men's Shirt</div>
      <div className="link">Women's Shirt</div> */}
      <div className="exploreCollection">Explore Collections</div>
      <div className="searchImage">
        <img src="https://images.bewakoof.com/uploads/grid/app/Bewakoof-Tee-Party-Search-Page-Banner-319x155px--1648706789.jpg" />
      </div>
    </div>
  );
}
export default SearchResultComponent;
