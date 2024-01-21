import { useState } from "react";
import "./debitCreditCard.css";
import { memo } from "react";

function DebitCreditCardForm(props) {
  const [checkbox, setCheckbox] = useState(false);
  function checkBoxHandler() {
    setCheckbox(!checkbox);
  }
  return (
    <div className="debitCardContainer">
      <div className="paymentMethodTypeImages">
        <div>
          <img src="https://images.bewakoof.com/web/ic-visa-gray-payment-v1.jpg" />
        </div>
        <div>
          <img
            src="https://images.bewakoof.com/web/ic-master-card-payment-v1.jpg"
            style={{ height: "15px", width: "22px" }}
          />
        </div>

        <div>
          <img
            src="https://images.bewakoof.com/web/ic-rupay-payment-v1.jpg"
            style={{ height: "14px", width: "50px" }}
          />
        </div>

        <div>
          <img
            src="https://images.bewakoof.com/web/ic-american-express-payment-v1.jpg"
            style={{ height: "14px", width: "20px" }}
          />
        </div>
      </div>

      <div className="cardNumber">
        <input type="text" placeholder="Card Number" />
      </div>

      <div className="expiryDateAndCvv">
        <input type="text" placeholder="MM/YYYY" style={{ width: "40%" }} />
        <input
          type="text"
          placeholder="CVV"
          style={{ width: "20%", marginLeft: "30px" }}
        />
      </div>

      <div className="cardNumber" style={{ marginTop: "40px" }}>
        <input type="text" placeholder="Name On card" />
      </div>

      <div className="checkbox">
        <input type="checkbox" onClick={checkBoxHandler}></input>
        <span style={{ marginLeft: "0.8rem" }}>
          Save card details for later
        </span>
      </div>

      <div className="formText">
        This transaction you make is totally secure. We don't save your CVV
        number.
      </div>

      <div className={`debitButton `}>
        <button className={`${checkbox ? "check" : "uncheck"}`}>
          Pay ₹{props.totalPrice}
        </button>
      </div>
    </div>
  );
}
export default memo(DebitCreditCardForm);
