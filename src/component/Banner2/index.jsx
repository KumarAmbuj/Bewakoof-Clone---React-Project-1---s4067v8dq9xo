import "./banner2.css";

import { Link, useNavigate } from "react-router-dom";

import { memo } from "react";

function Banner2() {
  const navigate = useNavigate();
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

  function handleImage1() {
    //console.log("hii");
    navigate(
      `/product-details?search=${JSON.stringify(
        men.search
      )}&filter=${JSON.stringify(men.filter)}`
    );
  }

  function handleImage2() {
    //console.log("hi");
    navigate(
      `/product-details?search=${JSON.stringify(
        women.search
      )}&filter=${JSON.stringify(men.filter)}`
    );
  }

  return (
    <div>
      <div className="bannerText">Designs of the Week</div>
      <div className="bannerImage">
        <img
          src="./images/banner2.webp"
          onClick={handleImage1}
          style={{ cursor: "pointer" }}
        />

        <img
          src="./images/banner12.webp"
          onClick={handleImage2}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
export default memo(Banner2);
