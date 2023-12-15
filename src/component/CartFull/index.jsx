import CartSingleComponent from "../CartSingleComponent";
import "./cartFull.css";
function CartFull() {
  return (
    <div className="cartFullContainer">
      <div className="cartFullLeft">
        <div className="cartCount">
          <b>My Bag</b> 3 item(s)
        </div>
        <div className="freeDelivery">
          Yay! You get FREE delivery on this order
        </div>

        <CartSingleComponent />
        <CartSingleComponent />
        <CartSingleComponent />
      </div>
      <div className="cartFullRight">
        <div className="saveExtra">
          Save extra <b> ₹90 </b> with <b> TriBe</b>
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
            <div>₹3597</div>
          </div>

          <div className="priceContent">
            <div>Shipping Charges</div>
            <div>FREE</div>
          </div>

          <div className="priceContent">
            <div>Bag Discount</div>
            <div> ₹2450</div>
          </div>

          <div className="priceContent" style={{ marginBottom: "40px" }}>
            <div>
              <b>Subtotal</b>
            </div>
            <div>
              {" "}
              <b>₹1147</b>
            </div>
          </div>
        </div>
        <div className="priceAndAddressButton">
          <div>
            <p style={{ marginTop: "0px", fontSize: "12px" }}>Total</p>
            <p>
              <b>₹1147</b>
            </p>
          </div>
          <div>
            <button>ADD ADDRESS</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartFull;
