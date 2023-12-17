import "./productCard.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";

function ProductCard(props) {
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  //console.log(token);

  const navigate = useNavigate();
  const { ratings, brand, displayImage, name, price, _id } = props.data;

  function navigateToSingleProductDetails(id) {
    navigate(`/single-product-details/${id}`);
  }

  async function sendWishlistData() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,
        {
          method: "PATCH",
          body: JSON.stringify({
            productId: _id,
          }),
          headers: {
            projectId: "zl6mct4l5ib6",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();
      console.log(resultResponse);

      //console.log(result);
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      //navigate("/signup");
    }
  }

  function handleFavourite(e) {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      sendWishlistData();
    }
  }

  return (
    <div
      className="productCard"
      onClick={() => {
        navigateToSingleProductDetails(_id);
      }}
    >
      <div className="productImage">
        <img src={displayImage} />
        <div className="tag">OVERSIZED FIT</div>
        <div className="star">
          <span className="starIcon">
            <FaStar />
          </span>
          <span className="starRating">{Math.round(ratings)}</span>
        </div>
      </div>
      <div className="productNameIcon">
        <div className="productName">
          <div className="name">{brand}</div>
          <div className="description">{name.slice(0, 25)}..</div>
        </div>
        <div className="productIcon">
          <span className="heart">
            <FaRegHeart onClick={handleFavourite} />
          </span>
        </div>
      </div>

      <div className="productPrice">
        <span className="actualPrice">
          <span style={{ fontSize: "12px" }}>₹</span>
          {price}
        </span>
        <span className="deletedPrice">
          <span>₹</span>
          <del>{Math.round(price + (price * 30) / 100)}</del>
        </span>
      </div>
      <div className="specialMemberPrice">
        <span className="priceBackground">
          <span>₹</span>
          {Math.round(price - (price * 10) / 100)} For Tribe Members
        </span>
      </div>
      <div className="btn">
        <button>100% COTTON</button>
      </div>
    </div>
  );
}
export default ProductCard;
