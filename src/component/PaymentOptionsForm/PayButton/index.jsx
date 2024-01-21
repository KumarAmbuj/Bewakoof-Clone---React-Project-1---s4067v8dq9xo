import "./payButton.css";
import { memo } from "react";

function PayButton(props) {
  return (
    <div className="payButton">
      <button>Pay ₹{props.totalPrice}</button>
    </div>
  );
}
export default memo(PayButton);
