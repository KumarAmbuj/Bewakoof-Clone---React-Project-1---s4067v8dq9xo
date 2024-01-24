import "./productCard.css";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext, useEffect, useState } from "react";
import { memo } from "react";

import { removeFromWishlistAPI } from "../../ConstantAPI/constantAPI";
import { projectId } from "../../Constant/constant";
import Loader from "../Loader";

function ProductCard(props) {
  const { isLoggedIn, logout, token, wishlistData, getWishlistDataAPI } =
    useContext(AuthContext);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  //console.log(wishlistData);
  const [isLoader, setIsLoader] = useState(false);

  const { slider } = props;

  //console.log(slider);

  const navigate = useNavigate();
  const { ratings, brand, displayImage, name, price, _id } = props.data;
  //console.log(_id);

  // let x = wishlistData.filter((val) => {
  //   return val.products._id === _id;
  // });
  // console.log(x);

  useEffect(() => {
    let x = wishlistData.filter((val) => {
      return val.products._id === _id;
    });
    setAddedToWishlist(x.length > 0);
  }, []);

  //setAddedToWishlist(x.length > 0);

  function navigateToSingleProductDetails(id) {
    navigate(`/single-product-details/${id}`);
  }

  async function sendWishlistData() {
    try {
      setIsLoader(true);
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
      console.log("wishlist added", resultResponse);

      //console.log(result);
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      //navigate("/signup");
    } finally {
      setIsLoader(false);
    }
  }

  async function handleFavourite(e) {
    e.stopPropagation();
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setAddedToWishlist(true);
      await sendWishlistData();

      await getWishlistDataAPI();
    }
  }

  async function handleRemoveFromFavourite(e) {
    e.stopPropagation();
    setAddedToWishlist(false);
    await removeFromWishlistAPI(_id, projectId, token);
    await getWishlistDataAPI();

    //console.log("hello");
  }

  return (
    <>
      {isLoader ? <Loader /> : ""}
      <div
        className={`productCard`}
        onClick={() => {
          navigateToSingleProductDetails(_id);
        }}
        // style={{ width: slider?.width }}
      >
        <div className="productImage">
          <img
            src={displayImage ? displayImage : "./images/singleImage.webp"}
          />
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
              {/* <FaRegHeart onClick={handleFavourite} /> */}
              {!addedToWishlist ? (
                <img
                  src="	https://images.bewakoof.com/web/Wishlist.svg"
                  style={{ height: "28px", width: "28px" }}
                  onClick={handleFavourite}
                />
              ) : (
                <img
                  src="		https://images.bewakoof.com/web/Wishlist-selected.svg"
                  style={{ height: "28px", width: "28px" }}
                  onClick={handleRemoveFromFavourite}
                />
              )}
              {/* <img
              src="	https://images.bewakoof.com/web/Wishlist.svg"
              style={{ height: "28px", width: "28px" }}
              onClick={handleFavourite}
            /> */}
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
    </>
  );
}
export default memo(ProductCard);
