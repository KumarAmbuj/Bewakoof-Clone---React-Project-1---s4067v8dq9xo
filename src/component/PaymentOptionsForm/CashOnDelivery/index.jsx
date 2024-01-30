import "./cashOndelivery.css";
import { memo, useState } from "react";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";
import Loader from "../../Loader";
import { projectId } from "../../../Constant/constant";
import { useNavigate } from "react-router-dom";

function CashOnDeliveryForm(props) {
  const { cartData, token, getCartDataAPI, addressType } =
    useContext(AuthContext);
  const navigate = useNavigate();

  //console.log(props.address);

  async function placeOrder(id) {
    try {
      //setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/order`,
        {
          method: "POST",
          headers: {
            projectId: projectId,
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productId: id,
            quantity: 1,
            addressType: addressType,
            address: props.address,
          }),
        }
      );

      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      //setIsLoader(false);
    }
  }

  async function clearCart() {
    try {
      //setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart/`,
        {
          method: "DELETE",
          headers: {
            projectId: projectId,
            Authorization: "Bearer " + token,
          },
        }
      );

      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      //setIsLoader(false);
    }
  }

  async function handlePlaceOrder() {
    cartData.forEach((val) => {
      placeOrder(val.product._id);
    });
    await clearCart();
    await getCartDataAPI();
    navigate("/order-placed");
  }

  return (
    <>
      {/* {setIsLoader ? <Loader /> : ""} */}
      <div className="cashOnDeliveryContainer">
        <div className="paymentText">
          Cash handling charges of ₹ 95 are applicable
        </div>

        <div className="CODPayButton">
          <button onClick={handlePlaceOrder}>
            Pay ₹{props.totalPrice + 95}
          </button>
        </div>
      </div>
    </>
  );
}
export default memo(CashOnDeliveryForm);
