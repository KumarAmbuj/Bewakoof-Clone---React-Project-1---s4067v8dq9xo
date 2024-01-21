import "./cashOndelivery.css";
import { memo } from "react";
function CashOnDeliveryForm(props) {
  return (
    <div className="cashOnDeliveryContainer">
      <div className="paymentText">
        Cash handling charges of ₹ 95 are applicable
      </div>

      <div className="CODPayButton">
        <button>Pay ₹{props.totalPrice + 95}</button>
      </div>
    </div>
  );
}
export default memo(CashOnDeliveryForm);
