import { useState } from "react";
import "./addressModalComponent.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
function AddressModalComponent(props) {
  const { SetAddressName, SetAddressNumber, SetAddressType, addressType } =
    useContext(AuthContext);
  const navigate = useNavigate();
  const [Address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    country: "",
    zipCode: "",
  });
  const [addressNameNumber, setAddressNameNumber] = useState({
    name: "",
    mobile: "",
  });

  const [addressTypeError, setAddressTypeError] = useState("");

  function handleChange(e) {
    setAddressTypeError("");
    setAddress({
      ...Address,
      [e.target.name]: e.target.value,
    });
  }

  function handleName(e) {
    setAddressTypeError("");
    setAddressNameNumber({
      ...addressNameNumber,
      [e.target.name]: e.target.value,
    });
  }
  function handleSubmit(e) {
    e.preventDefault();
    SetAddressName(addressNameNumber.name);
    SetAddressNumber(addressNameNumber.mobile);

    if (addressType) {
      navigate("/checkout", { state: { Address } });
    } else {
      setAddressTypeError("please choose address type");
    }
    //console.log(addressNameNumber);
  }

  function handleAddressType(val) {
    SetAddressType(val);
  }

  return (
    <div className="addressModalContainer">
      <div className="addressModalComponent">
        <div className="addressHeaderCrossButton">
          <div className="addressHeader">Edit Address</div>
          <div
            style={{ cursor: "pointer", marginTop: "20px" }}
            onClick={props.hideModal}
          >
            <i className="fa fa-times" aria-hidden="true"></i>
          </div>
        </div>

        <div className="addressFormContainer">
          <form onSubmit={handleSubmit}>
            <div>
              <fieldset>
                <legend>Country</legend>
                <input type="text" onChange={handleChange} name="country" />
              </fieldset>
            </div>
            <div className="addressBorderLine"></div>

            <div>
              <fieldset>
                <legend>Full Name</legend>
                <input type="text" required name="name" onChange={handleName} />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>Mobile Number</legend>
                <input
                  type="number"
                  required
                  name="mobile"
                  onChange={handleName}
                />
              </fieldset>
            </div>

            <div className="addressBorderLine"></div>

            <div>
              <fieldset>
                <legend>Pincode/Postal Code/Zipcodee</legend>
                <input
                  type="number"
                  required
                  name="zipCode"
                  onChange={handleChange}
                />
              </fieldset>
            </div>

            <div className="cityStateFlex">
              <div style={{ flex: 1 }}>
                <fieldset>
                  <legend>City</legend>
                  <input
                    type="text"
                    required
                    name="city"
                    onChange={handleChange}
                  />
                </fieldset>
              </div>

              <div style={{ flex: 1 }}>
                <fieldset>
                  <legend>State</legend>
                  <input
                    type="text"
                    required
                    name="state"
                    onChange={handleChange}
                  />
                </fieldset>
              </div>
            </div>

            <div>
              <fieldset>
                <legend>Flat no./Building, Street name</legend>
                <input
                  type="text"
                  required
                  name="street"
                  onChange={handleChange}
                />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>Area/Locality</legend>
                <input type="text" required />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>Landmark/(optional)</legend>
                <input type="text" />
              </fieldset>
            </div>
            <div className="addressBorderLine"></div>

            <div style={{ marginTop: "15px" }}>Save address as</div>
            <div className="addressTypeButtons">
              <span
                className={`addressTypeSpan ${
                  addressType === "Home" ? "activeType" : ""
                }`}
                onClick={() => {
                  handleAddressType("Home");
                }}
              >
                Home
              </span>
              <span
                className={`addressTypeSpan ${
                  addressType === "Office" ? "activeType" : ""
                }`}
                onClick={() => {
                  handleAddressType("Office");
                }}
              >
                Office
              </span>
              <span
                className={`addressTypeSpan ${
                  addressType === "Other" ? "activeType" : ""
                }`}
                onClick={() => {
                  handleAddressType("Other");
                }}
              >
                Other
              </span>
            </div>

            <div style={{ color: "red", fontSize: "13px", fontWeight: "700" }}>
              {addressTypeError}
            </div>

            <div className="AddressButtons">
              <button type="submit" className="goToCheckout">
                GO TO CHECKOUT
              </button>
              <button className="cancel" onClick={props.hideModal}>
                CANCEL
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default AddressModalComponent;
