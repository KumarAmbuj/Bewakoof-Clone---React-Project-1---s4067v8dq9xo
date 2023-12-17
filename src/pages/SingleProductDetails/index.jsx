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

function SingleProductDetails() {
  //console.log("hi");
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const [data, setData] = useState({});
  const [Image, setImage] = useState(data?.displayImage);
  const [addedToCart, setAddedToCart] = useState(false);

  const { productId } = useParams();
  const navigate = useNavigate();
  //console.log(productId);

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
      console.log(resultResponse);

      //console.log(result);
      if (resultResponse.status === "success") {
        setAddedToCart(true);
      } else {
        //navigate("/signup");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/");
    }
  }

  function handleAddToCart() {
    if (isLoggedIn) {
      sendDataToCart();
    } else {
      navigate("/login");
    }
  }

  async function getProducts() {
    try {
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
      //console.log(responseJson.data);
    } catch (error) {}
  }
  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="mainContainer">
      <div className="miniHeading">
        Home / Men Clothing / Men's Tshirt / Men's Printed T-shirt / Men's Black
        Panther Graphic Printed Oversized T-shirt
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

            {/* <div className="smallerImage">
              <img src="./images/singleImage.webp" />
            </div>
            <div className="smallerImage">
              <img src="./images/singleImage.webp" />
            </div>
            <div className="smallerImage">
              <img src="./images/singleImage.webp" />
            </div>
            <div className="smallerImage">
              <img src="./images/singleImage.webp" />
            </div> */}
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
                {Math.floor(data?.ratings * 10) / 10}
              </span>
            </button>
          </div>
          <div className="singleProductPrice">
            <span style={{ fontSize: "14px" }}>₹</span>
            <span className="price">{data?.price}</span>

            <span className="deletedPrice">
              <span>₹</span>
              <del>{Math.round(data?.price + data?.price * 0.5)}</del>
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
            TriBe members get an extra discount of <b>₹60</b> and FREE shipping.{" "}
            <span style={{ color: "blue" }}>Learn more</span>
          </div>
          <div className="bordersLine"></div>
          <div className="selectSize">
            <p>Select Size</p>
            <div className="sizes">
              {data?.size?.map((val, index) => {
                return <SizeComponent size={val} key={index} />;
                //console.log(val);
              })}

              {/* <SizeComponent />
              <SizeComponent />
              <SizeComponent /> */}
            </div>
          </div>

          <div className="addToBagWishlist">
            <button className="addToBag" onClick={handleAddToCart}>
              <span>
                <img src="/images/addToBag.svg" />
              </span>
              {!addedToCart ? "ADD TO BAG" : "GO TO BAG"}
            </button>
            <button className="wishlist">
              <span>
                <FaRegHeart />
              </span>
              WISHLIST
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
  );
}
export default SingleProductDetails;
