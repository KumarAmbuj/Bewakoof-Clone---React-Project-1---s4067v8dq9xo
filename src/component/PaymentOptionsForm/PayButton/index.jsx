import "./payButton.css";
function PayButton(props) {
  return (
    <div className="payButton">
      <button>Pay ₹{props.totalPrice}</button>
    </div>
  );
}
export default PayButton;
