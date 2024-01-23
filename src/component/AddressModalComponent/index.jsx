import "./addressModalComponent.css";
import { useNavigate } from "react-router-dom";
function AddressModalComponent(props) {
  const navigate = useNavigate();
  function handleSubmit() {
    navigate("/checkout");
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
                <input type="text" value="India" disabled />
              </fieldset>
            </div>
            <div className="addressBorderLine"></div>

            <div>
              <fieldset>
                <legend>Full Name</legend>
                <input type="text" required />
              </fieldset>
            </div>

            <div>
              <fieldset>
                <legend>Mobile Number</legend>
                <input type="number" required />
              </fieldset>
            </div>

            <div className="addressBorderLine"></div>

            <div>
              <fieldset>
                <legend>Pincode/Postal Code/Zipcodee</legend>
                <input type="text" required />
              </fieldset>
            </div>

            <div className="cityStateFlex">
              <div style={{ flex: 1 }}>
                <fieldset>
                  <legend>City</legend>
                  <input type="text" required />
                </fieldset>
              </div>

              <div style={{ flex: 1 }}>
                <fieldset>
                  <legend>State</legend>
                  <input type="text" required />
                </fieldset>
              </div>
            </div>

            <div>
              <fieldset>
                <legend>Flat no./Building, Street name</legend>
                <input type="text" required />
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
