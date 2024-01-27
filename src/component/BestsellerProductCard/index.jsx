import "./bestsellerProductCard.css";

import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext, useEffect, useState } from "react";
import { memo } from "react";
import { removeFromWishlistAPI } from "../../ConstantAPI/constantAPI";
import { projectId } from "../../Constant/constant";
import Loader from "../Loader";

function BestsellerProductCard(props) {
  const { isLoggedIn, logout, token, wishlistData, getWishlistDataAPI } =
    useContext(AuthContext);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [loader, setLoader] = useState(false);

  const { slider } = props;

  const navigate = useNavigate();
  const { ratings, brand, displayImage, name, price, _id } = props.data;

  useEffect(() => {
    let x = wishlistData.filter((val) => {
      return val.products._id === _id;
    });
    setAddedToWishlist(x.length > 0);
  }, []);

  function navigateToSingleProductDetails(id) {
    navigate(`/single-product-details/${id}`);
  }

  async function sendWishlistData() {
    try {
      setLoader(true);
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
    } finally {
      setLoader(false);
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
  }

  return (
    <>
      {loader ? <Loader /> : ""}
      <div
        className="bestSellerProductCard"
        onClick={() => {
          navigateToSingleProductDetails(_id);
        }}
      >
        <div className="bestSellerProductCardImage">
          <img
            src={displayImage ? displayImage : "./images/singleImage.webp"}
          />
          <div className="tag">OVERSIZED FIT</div>
        </div>
        <div className="productNameIcon">
          <div className="productName" style={{ padding: "7px" }}>
            <div className="name">{brand}</div>
            <div className="description">{name.slice(0, 22)}..</div>
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
            </span>
          </div>
        </div>

        <div
          className="productPrice"
          style={{ paddingLeft: "7px", paddingBottom: "20px" }}
        >
          <span className="actualPrice">
            <span style={{ fontSize: "12px" }}>₹</span>
            <b>{price}</b>
          </span>
          <span className="deletedPrice">
            <span>₹</span>
            <del>{Math.round(price + (price * 30) / 100)}</del>
          </span>

          <span className="perOff">53% OFF</span>
        </div>
      </div>
    </>
  );
}
export default memo(BestsellerProductCard);
