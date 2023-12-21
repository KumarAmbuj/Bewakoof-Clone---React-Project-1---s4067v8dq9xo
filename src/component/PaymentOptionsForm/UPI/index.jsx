import "./upi.css";
function UPIForm() {
  return (
    <div className="UPIContainer">
      <div className="UPIImages">
        <img
          src="https://images.bewakoof.com/web/ic-gpay-payment-gray-v1.jpg"
          style={{ height: "14px", width: "37px", marginRight: "15px" }}
        />
        <img
          src="https://images.bewakoof.com/web/ic-bhim-upi-gray-payment-v1.jpg"
          style={{ height: "14px", width: "37px", marginRight: "15px" }}
        />
        <img
          src="https://images.bewakoof.com/web/ic-phone-pe-gray-payment-v1.jpg"
          style={{ height: "14px", width: "37px", marginRight: "15px" }}
        />
        <img
          src="	https://images.bewakoof.com/web/ic-more-option-payment-v1.jpg"
          style={{ height: "14px", width: "57px", marginRight: "15px" }}
        />
      </div>
      <div className="UPIInput">
        <input type="text" placeholder="UPI ID" />
      </div>
      <div className="UPIText">
        UPI ID is in the format of yourname@bankname or yourmobile@bankname
      </div>

      <div className="checkbox">
        <input type="checkbox"></input>
        <span style={{ marginLeft: "0.8rem" }}>
          Save this UPI ID for future payments.
        </span>
      </div>

      <div className="UPIButton">
        <button>VERIFY</button>
      </div>
    </div>
  );
}
export default UPIForm;
