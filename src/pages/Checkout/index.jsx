import { useState, useEffect } from "react";
import "./checkout.css";
import DebitCreditCardForm from "../../component/PaymentOptionsForm/DebitCreditCard";
import WalletForm from "../../component/PaymentOptionsForm/Wallet";
import NetBankingForm from "../../component/PaymentOptionsForm/NetBanking";
import UPIForm from "../../component/PaymentOptionsForm/UPI";
import CashOnDeliveryForm from "../../component/PaymentOptionsForm/CashOnDelivery";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Checkout() {
  const [cartData, setCartDat] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState(1);
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const navigate = useNavigate();

  let totalPrice = 0;
  for (let x of cartData) {
    totalPrice += x.product.price;
  }

  function handlePaymentOption(val) {
    setPaymentMethod(val);
  }

  async function getCartData() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart`,
        {
          method: "GET",

          headers: {
            projectId: "zl6mct4l5ib6",
            Authorization: "Bearer " + token,
          },
        }
      );
      let resultResponse = await result.json();
      //console.log(resultResponse);

      //console.log(result);
      if (resultResponse.status === "success") {
        setCartDat(resultResponse.data.items);
        console.log(cartData);
      } else {
        navigate("/");
      }
    } catch {
      console.log("errorrrrrrrrrrrr");
      navigate("/");
    }
  }

  useEffect(() => {
    getCartData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="checkoutMainContainer">
      {/* <div></div> */}

      <div className="paymentContainer">
        <div className="paymentMethodText">
          <b>Choose your payment method</b>
        </div>
        <div className="paymentOptionContainer">
          <div className="paymentOptions">
            <div
              className={`paymentType ${
                paymentMethod == 1 ? "paymentTypeOnClick" : ""
              }`}
              onClick={() => {
                handlePaymentOption(1);
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <img src="https://images.bewakoof.com/web/bank-card-fill-1645697857.svg" />
              </span>
              Debit & Credit Card
            </div>

            <div
              className={`paymentType ${
                paymentMethod == 2 ? "paymentTypeOnClick" : ""
              }`}
              onClick={() => {
                handlePaymentOption(2);
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <img src="https://images.bewakoof.com/web/Group-1645705428.png" />
              </span>
              Wallet
            </div>

            <div
              className={`paymentType ${
                paymentMethod == 3 ? "paymentTypeOnClick" : ""
              }`}
              onClick={() => {
                handlePaymentOption(3);
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <img src="https://images.bewakoof.com/web/upi-icon-1645705429.png" />
              </span>
              UPI
            </div>

            <div
              className={`paymentType ${
                paymentMethod == 4 ? "paymentTypeOnClick" : ""
              }`}
              onClick={() => {
                handlePaymentOption(4);
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <img src="	https://images.bewakoof.com/web/nb-icon-1645705428.png" />
              </span>
              Net banking
            </div>

            <div
              className={`paymentType ${
                paymentMethod == 5 ? "paymentTypeOnClick" : ""
              }`}
              onClick={() => {
                handlePaymentOption(5);
              }}
            >
              <span style={{ marginRight: "10px" }}>
                <img src="	https://images.bewakoof.com/web/cod-icon-1645705427.png" />
              </span>
              Cash On Delivery
            </div>
          </div>
          <div className="paymentForm">
            {paymentMethod == 1 && (
              <DebitCreditCardForm totalPrice={totalPrice} />
            )}
            {paymentMethod == 2 && <WalletForm totalPrice={totalPrice} />}
            {paymentMethod == 3 && <UPIForm totalPrice={totalPrice} />}
            {paymentMethod == 4 && <NetBankingForm totalPrice={totalPrice} />}
            {paymentMethod == 5 && (
              <CashOnDeliveryForm totalPrice={totalPrice} />
            )}
          </div>
        </div>
      </div>

      <div className="cartAndPriceContainer">
        <div className="Name">
          Delivering order to <b>Kumar Ambuj</b>
        </div>
        <div className="Address">Piska more Ranchi Jharkhand...</div>

        <div className="checkoutLine"></div>

        <div className="youArePayingFor">You are paying for these items</div>

        {cartData.length > 0 &&
          cartData.map((val, index) => {
            return (
              <div className="checkoutCartCard" key={index}>
                <div>
                  <img src={val.product.displayImage} />
                </div>
                <div>
                  <div className="checkoutCardBrandName">
                    {val.product.name}
                  </div>
                  <div className="estimatedDelivery">
                    Estimated delivery by{" "}
                    <span style={{ color: "#00b852" }}>
                      <b>24 December 2023</b>
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

        {/* <div>price summary</div> */}

        <div className="checkoutPriceSmmary">Price Summary</div>

        <div className="checkoutPrice">
          <div>Total MRP (Incl. of taxes) </div>
          <div>₹{totalPrice + Math.floor(totalPrice / 1.5)}</div>
        </div>

        <div className="checkoutPrice">
          <div>Delivery Fee</div>
          <div style={{ color: "rgb(0, 184, 82)" }}>FREE</div>
        </div>

        <div className="checkoutPrice">
          <div>Discount MRP </div>
          <div>₹{Math.floor(totalPrice / 1.5)}</div>
        </div>

        <div className="checkoutLine"></div>

        <div className="checkoutPrice">
          <div>
            <b>Final Amount</b>{" "}
          </div>
          <div>
            <b>₹{totalPrice}</b>
          </div>
        </div>

        <div className="checkoutBottomImages">
          <img
            src="https://images.bewakoof.com/web/google-pay-logo.svg"
            style={{ height: "50px", width: "50px" }}
          />
          <img
            src="	https://images.bewakoof.com/web/upi-sign.svg"
            style={{ height: "50px", width: "50px" }}
          />
          <img
            src="https://images.bewakoof.com/web/phone-pay-logo.svg"
            style={{ height: "37px", width: "50px" }}
          />
          <img
            src="https://images.bewakoof.com/web/visa-card-logo-9.svg"
            style={{ height: "37px", width: "50px" }}
          />
          <img
            src="	https://images.bewakoof.com/web/master-card.svg"
            style={{ height: "50px", width: "50px" }}
          />
        </div>
      </div>
    </div>
  );
}
export default Checkout;
