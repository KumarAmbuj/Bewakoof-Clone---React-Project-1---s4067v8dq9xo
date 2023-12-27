import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import ProductCard from "../../component/ProductCard";
import "./productDetails.css";
import Accordion from "../../component/Accordion";
import { AccordionList } from "../../Constant/constant";
import Loader from "../../component/Loader";

function ProductDetails() {
  const [data, setData] = useState([]);
  const [isLoader, setIsLoader] = useState(false);
  const location = useLocation();

  async function getProducts() {
    try {
      setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/clothes/products?limit=100&page=1?${location.search}`,
        {
          headers: {
            projectId: "zl6mct4l5ib6",
          },
        }
      );

      const responseJson = await response.json();
      setData(responseJson.data);
      //console.log(responseJson.data);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      setIsLoader(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, [location]);
  return (
    <>
      {isLoader ? <Loader /> : ""}
      <div className="prod">
        <div className="miniCategory">
          Home / Clothing / T-Shirts for / Printed T Shirts for
        </div>
        <div className="productDetailsHeading">
          Printed T Shirts for
          <span className="resultCount">({data.length})</span>
        </div>

        <div className="filterTextFilter">
          <div className="filterText">FILTER</div>
          <div className="sortBy">
            <span>SORT BY</span>
            <select>
              <option>Popular</option>
              <option>New</option>
              <option>Price: High to Low</option>
              <option>Price: Low to High</option>
            </select>
          </div>
        </div>

        <div className="productDetailsContainer">
          <div className="productDetailsFilter">
            {AccordionList.map((val, index) => {
              return <Accordion data={val} key={index} />;
            })}
          </div>
          <div className="productDetails">
            <div className="productBanner">
              <img src="https://images.bewakoof.com/uploads/category/desktop/Statement-Winter-jackets_Men_Inside-Desktop-banner_(1)-1702820716.jpg" />
            </div>
            <div className="productDetailsCards">
              {/* <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard /> */}
              {data.length > 0 &&
                data.map((val) => {
                  return <ProductCard data={val} key={val._id} />;
                })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ProductDetails;
