import "./banner3.css";
import { useNavigate } from "react-router-dom";

function Banner3() {
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

  const customized = {
    name: "",
    search: { name: "printed", description: "printed" },
    filter: { subCategory: "tshirt", gender: "Men" },
  };

  const fandom = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "jogger", gender: "Men" },
  };
  function handleClick() {
    navigate(
      `/product-details?search=${JSON.stringify(
        women.search
      )}&filter=${JSON.stringify(men.filter)}`
    );
  }

  return (
    <div>
      <div className="banner3Text">TOO HOT TO BE MISSED</div>
      <div className="bannerImage">
        <img
          src="./images/banner31.jpg"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src="./images/banner32.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="bannerImage">
        <img
          src="./images/banner33.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src="./images/banner34.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
export default Banner3;
