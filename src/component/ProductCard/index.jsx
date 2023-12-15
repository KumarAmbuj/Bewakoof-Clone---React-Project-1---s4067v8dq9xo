import "./productCard.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";

function ProductCard(props) {
  const navigate = useNavigate();
  const { ratings, brand, displayImage, name, price, _id } = props.data;
  function navigateToSingleProductDetails(id) {
    navigate(`/single-product-details/${id}`);
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
            <FaRegHeart />
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
