import "./wishlistCard.css";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { AuthContext } from "../../authentication/AuthContext";
import { useContext, memo } from "react";

import { addToCartAPI } from "../../ConstantAPI/constantAPI";
import { removeFromWishlistAPI } from "../../ConstantAPI/constantAPI";

import { projectId } from "../../Constant/constant";

function WishlistCard(props) {
  const { isLoggedIn, logout, token, getWishlistDataAPI, getCartDataAPI } =
    useContext(AuthContext);
  const navigate = useNavigate();
  // async function removeFromWishlistAPI(id) {
  //   try {
  //     let result = await fetch(
  //       `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/${id}`,
  //       {
  //         method: "DELETE",

  //         headers: {
  //           projectId: "zl6mct4l5ib6",
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     let resultResponse = await result.json();
  //     //console.log(resultResponse);
  //     navigate("/wishlist");

  //     //console.log(result);
  //     // if (resultResponse.status === "success") {
  //     //   login();
  //     //   SetToken(resultResponse.token);

  //     //   navigate("/");
  //     // } else {
  //     //   navigate("/signup");
  //     // }
  //   } catch {
  //     //toast.error("Some error occured");
  //     console.log("errorrrrrrrrrrrr");
  //     navigate("/");
  //   }
  // }

  function removeFromWishlist(id) {
    removeFromWishlistAPI(id, projectId, token);
    getWishlistDataAPI();
  }

  function addToCart() {
    let id = props.data.products._id;
    addToCartAPI(id, projectId, token);
    removeFromWishlistAPI(id, projectId, token);
    getWishlistDataAPI();
    getCartDataAPI();
  }

  return (
    <div className="wishlistCard">
      <div className="wishlistCardImage">
        <img src={props.data.products.displayImage} />
        <div className="tag">OVERSIZED FIT</div>

        <div className="crossButton">
          <img
            src="https://images.bewakoof.com/web/crossBtnIcon.svg"
            onClick={() => {
              removeFromWishlist(props.data.products._id);
            }}
          />
        </div>

        <div className="star">
          <span className="starRating">
            {Math.floor(props.data.products.ratings * 10) / 10}
          </span>
          <span className="starIcon">
            <FaStar />
          </span>
        </div>
      </div>

      <div className="wishlistCardHeader">Bewakoof</div>

      <div className="wishlistCardDescription">{props.data.products.name}</div>

      <div className="wishlistCardPrice">
        <span className="actualPrice">
          <span style={{ fontSize: "12px" }}>₹</span>
          {props.data.products.price}
        </span>

        <span className="deletedPrice">
          <del>
            <span>₹</span>1499
          </del>
        </span>

        <span className="percentageOff">50% OFF</span>
      </div>

      <div className="borderLine"></div>

      <div className="addToBagButton">
        <button onClick={addToCart}>ADD TO BAG</button>
      </div>
    </div>
  );
}
export default memo(WishlistCard);
