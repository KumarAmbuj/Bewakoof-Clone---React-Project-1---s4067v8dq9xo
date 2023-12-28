import "./banner4.css";
import { useNavigate } from "react-router-dom";

function Banner4() {
  const navigate = useNavigate();
  const men = {
    name: "",
    search: { name: "printed", description: "printed" },
    filter: { subCategory: "tshirt" },
  };

  const women = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "kurti", gender: "Women" },
  };

  const customized = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "hoodie" },
  };

  const fandom = {
    name: "",
    search: { name: "", description: "" },
    filter: { subCategory: "jogger", gender: "Men" },
  };

  function handleClick() {
    navigate(
      `/product-details?search=${JSON.stringify(
        men.search
      )}&filter=${JSON.stringify(men.filter)}`
    );
  }

  return (
    <div>
      <div className="banner3Text">OUR BEST PICKS</div>
      <div className="bannerImage">
        <img
          src="./images/Banner41.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src="./images/Banner42.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="bannerImage">
        <img
          src="./images/Banner43.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
        <img
          src="./images/Banner44.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="bannerImageFull" style={{ paddingTop: "10px" }}>
        <img
          src="./images/Banner51.webp"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
      <div className="bannerImageFull" style={{ paddingTop: "5px" }}>
        <img
          src="./images/Banner52.jpg"
          onClick={handleClick}
          style={{ cursor: "pointer" }}
        />
      </div>
    </div>
  );
}
export default Banner4;
