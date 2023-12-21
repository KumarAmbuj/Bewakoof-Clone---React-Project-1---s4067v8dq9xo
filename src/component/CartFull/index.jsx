import { useState } from "react";
import CartSingleComponent from "../CartSingleComponent";
import "./cartFull.css";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";

function CartFull(props) {
  const [cartData, setCartData] = useState(props.data);
  const [totalPrice, setTotalPrice] = useState(0);
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const { getCartData } = props;
  const navigate = useNavigate();
  let sum = 0;
  for (let x of cartData) {
    sum += x.product.price;
  }

  async function removeFromCartAPI(id) {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/${id}`,
        {
          method: "DELETE",

          headers: {
            projectId: "zl6mct4l5ib6",
            Authorization: "Bearer " + token,
          },
        }
      );
      let resultResponse = await result.json();
      console.log(resultResponse);
      //navigate("/wishlist");

      //console.log(result);
      if (resultResponse.status === "success") {
        getCartData();
        //navigate("/cart");
      } else {
        navigate("/");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/");
    }
  }

  function deleteFromCart(id) {
    console.log(id);
    removeFromCartAPI(id);
  }

  return (
    <div className="cartFullContainer">
      <div className="cartFullLeft">
        <div className="cartCount">
          <b>My Bag</b> {cartData.length} item(s)
        </div>
        <div className="freeDelivery">
          Yay! You get FREE delivery on this order
        </div>
        {cartData.map((val) => {
          return (
            <CartSingleComponent
              data={val}
              key={val.product._id}
              deleteHandler={() => {
                deleteFromCart(val.product._id);
              }}
            />
          );
        })}

        {/* <CartSingleComponent />
        <CartSingleComponent /> */}
      </div>
      <div className="cartFullRight">
        <div className="saveExtra">
          Save extra{" "}
          <b style={{ marginLeft: "5px", marginRight: "5px" }}> ₹90 </b> with{" "}
          <b style={{ marginLeft: "5px", marginRight: "5px" }}> TriBe</b>
        </div>

        <div className="extraDiscount">
          Whistles! Get extra 15% cashback on prepaid orders above Rs.699.
          Coupon code - OOF15
        </div>
        <div className="applyCoupon">
          <div className="applycouponInner">
            Apply Coupon / Gift Card / Referral
          </div>
        </div>

        <div className="priceSummary">
          <div className="priceSummaryHeading">PRICE SUMMARY</div>
          <div className="priceContent">
            <div>Total MRP (Incl. of taxes)</div>
            <div>₹{sum + Math.floor(sum / 2)}</div>
          </div>

          <div className="priceContent">
            <div>Shipping Charges</div>
            <div>FREE</div>
          </div>

          <div className="priceContent">
            <div>Bag Discount</div>
            <div> ₹{Math.floor(sum / 2)}</div>
          </div>

          <div className="priceContent" style={{ marginBottom: "40px" }}>
            <div>
              <b>Subtotal</b>
            </div>
            <div>
              {" "}
              <b>₹{sum}</b>
            </div>
          </div>
        </div>
        <div className="priceAndAddressButton">
          <div>
            <p style={{ marginTop: "0px", fontSize: "12px" }}>Total</p>
            <p>
              <b>{sum}</b>
            </p>
          </div>
          <div>
            <Link to="/checkout">
              <button>ADD ADDRESS</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFull;
