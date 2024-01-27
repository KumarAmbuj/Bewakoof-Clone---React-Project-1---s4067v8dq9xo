import "./singleProductDetails.css";

import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";

import SizeComponent from "../../component/SizeComponent";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";

import { addToWishlistDataAPI } from "../../ConstantAPI/constantAPI";
import { removeFromWishlistAPI } from "../../ConstantAPI/constantAPI";

import { projectId } from "../../Constant/constant";
import Loader from "../../component/Loader";

function SingleProductDetails() {
  const {
    isLoggedIn,
    logout,
    token,
    getCartDataAPI,
    getWishlistDataAPI,
    wishlistData,
    cartData,
  } = useContext(AuthContext);

  const [data, setData] = useState({});
  const [Image, setImage] = useState(data?.displayImage);
  const [addedToCart, setAddedToCart] = useState(false);
  const [addedToWishlist, setAddedToWishlist] = useState(false);
  const [isLoader, setIsLoader] = useState(false);
  const [selectSize, setSelectSize] = useState();
  const { productId } = useParams();
  const navigate = useNavigate();

  async function sendDataToCart() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${productId}`,
        {
          method: "PATCH",
          body: JSON.stringify({
            quantity: 1,
            size: "S",
          }),
          headers: {
            projectId: "zl6mct4l5ib6",
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();

      if (resultResponse.status === "success") {
        setAddedToCart(true);
      } else {
      }
    } catch {
      console.log("errorrrrrrrrrrrr");
    }
  }

  async function handleAddToCart() {
    if (isLoggedIn) {
      await sendDataToCart();
      await getCartDataAPI();
    } else {
      navigate("/login");
    }
  }

  function handleGoToBag() {
    navigate("/cart");
  }

  async function handleFavourite() {
    if (!isLoggedIn) {
      navigate("/login");
    } else {
      setAddedToWishlist(true);
      await addToWishlistDataAPI(productId, projectId, token);

      await getWishlistDataAPI();
    }
  }

  async function handleRemoveFromFavourite(e) {
    e.stopPropagation();
    setAddedToWishlist(false);
    await removeFromWishlistAPI(productId, projectId, token);
    await getWishlistDataAPI();
  }

  async function getProducts() {
    try {
      setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/product/${productId}`,
        {
          headers: {
            projectId: "zl6mct4l5ib6",
          },
        }
      );

      const responseJson = await response.json();
      setData(responseJson.data);
      setImage(responseJson.data.displayImage);
    } catch (error) {
    } finally {
      setIsLoader(false);
    }
  }

  useEffect(() => {
    getProducts();
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    let x = wishlistData?.filter((val) => {
      return val?.products?._id == productId;
    });
    setAddedToWishlist(x.length > 0);
  }, [wishlistData]);
  useEffect(() => {
    let x = cartData?.filter((val) => {
      return val?.product?._id == productId;
    });
    setAddedToCart(x.length > 0);
  }, [cartData]);

  //console.log("ddddddd", data?.ratings);
  return (
    <>
      {isLoader ? <Loader /> : ""}
      <div className="mainContainer">
        <div className="miniHeading">
          Home / Men Clothing / Men's Tshirt / Men's Printed T-shirt / Men's
          Black Panther Graphic Printed Oversized T-shirt
        </div>
        <div className="singleProductContainer">
          <div className="containerLeft">
            <div className="imageList">
              <div className="arrow">
                <FaAngleUp />
              </div>
              {data?.images?.slice(0, 5)?.map((val, index) => {
                return (
                  <div className="smallerImage" key={index}>
                    <img
                      src={val}
                      onClick={() => {
                        setImage(val);
                      }}
                    />
                  </div>
                );
              })}

              <div className="arrow">
                <FaAngleDown />
              </div>
            </div>
            <div className="singleProductDeatilsImage">
              <img src={Image} />
            </div>
          </div>
          <div className="containerRight">
            <div className="singleProductHeading">
              {data?.brand?.toUpperCase()}
            </div>
            <div className="singleProductHeading2">{data.name}</div>
            <div className="starRating">
              <button>
                <span className="starRatingIcon">
                  {" "}
                  <FaStar />{" "}
                </span>
                <span className="starRatingNumber">
                  {data?.ratings && Math.floor(data?.ratings * 10) / 10}
                </span>
              </button>
            </div>
            <div className="singleProductPrice">
              <span style={{ fontSize: "14px" }}>₹</span>
              <span className="price">{data?.price}</span>

              <span className="deletedPrice">
                <span>₹</span>
                <del>
                  {data?.price && Math.round(data?.price + data?.price * 0.5)}
                </del>
              </span>

              <span className="percentageOff">50% OFF</span>
              <div className="taxes">Inclusive of all taxes</div>
            </div>

            <div className="btns">
              <button className="oversize">OVERSIZED FIT</button>
              <button className="cotton">100% COTTOM</button>
            </div>
            <div className="bordersLine"></div>
            <div className="tribeMessage">
              TriBe members get an extra discount of <b>₹60</b> and FREE
              shipping. <span style={{ color: "blue" }}>Learn more</span>
            </div>
            <div className="bordersLine"></div>
            <div className="selectSize">
              <p>Select Size</p>
              <div className="sizes">
                {data?.size?.map((val, index) => {
                  return (
                    <SizeComponent
                      size={val}
                      key={index}
                      index={index}
                      state={selectSize}
                      onclick={() => {
                        setSelectSize(index);
                      }}
                    />
                  );
                  //console.log(val);
                })}
              </div>
            </div>

            <div className="addToBagWishlist">
              <button className="addToBag" onClick={handleAddToCart}>
                <span>
                  <img src="/images/addToBag.svg" />
                </span>
                {!addedToCart ? (
                  <span>ADD TO BAG</span>
                ) : (
                  <span onClick={handleGoToBag}>GO TO BAG</span>
                )}
              </button>
              <button className="wishlist" onClick={handleFavourite}>
                <span>
                  {!addedToWishlist ? (
                    <img
                      src="	https://images.bewakoof.com/web/Wishlist.svg"
                      style={{ height: "28px", width: "28px" }}
                    />
                  ) : (
                    <img
                      src="		https://images.bewakoof.com/web/Wishlist-selected.svg"
                      style={{ height: "28px", width: "28px" }}
                      onClick={handleRemoveFromFavourite}
                    />
                  )}
                </span>
                <span>WISHLIST</span>
              </button>
            </div>

            <div className="bordersLine"></div>

            <div className="getThisBy">
              GET THIS BY{" "}
              <span style={{ color: "green" }}>{"Tuesday, 12 Dec"}</span>
            </div>

            <div className="deliveringTo">
              <img src="/images/delivering.svg" />

              <span>Delivering to</span>
              <span style={{ color: "blue", marginLeft: "10px" }}>141006</span>
            </div>

            <div className="cashOnDelivery">
              <img src="/images/cashOnDelivery.webp" />

              <span>Cash on Delivery is available.</span>
            </div>

            <div className="globalDelivery">
              <img src="/images/globalDelivery.svg" />

              <span style={{ color: "blue" }}>
                Check For Global Delivery {"->"}
              </span>
            </div>

            <div className="bordersLine"></div>

            <div className="trustBagContainer">
              <div className="trustBagContainerContent">
                <img src="/images/securePayment.svg" />
                <div className="text">100% SECURE PAYMENT</div>
              </div>
              <div className="trustBagContainerContent">
                <img src="/images/easyReturn.svg" />
                <div className="text">EASY RETURNS & INSTANT REFUNDS</div>
              </div>
              <div className="trustBagContainerContent">
                <img src="/images/shippingGlobally.svg" />

                <div className="text">SHIPPING GLOBALLY</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProductDetails;
