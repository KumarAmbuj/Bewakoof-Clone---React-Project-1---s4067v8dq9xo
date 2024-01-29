import "./payButton.css";
import { memo } from "react";
import { AuthContext } from "../../../authentication/AuthContext";
import { useContext } from "react";

function PayButton(props) {
  const { cartData, token } = useContext(AuthContext);
  //console.log(cartData);
  async function placeOrder() {
    try {
      setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/order`,
        {
          method: "POST",
          body: JSON.stringify({
            productId: cartData[0].product._id,
            quantity: 2,
            addressType: "HOME",
            address: {
              street: "123 Main St",
              city: "Anytown",
              state: "CA",
              country: "USA",
              zipCode: "12345",
            },
          }),
          headers: {
            projectId: projectId,
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        }
      );

      const responseJson = await response.json();
      console.log(responseJson);
    } catch (error) {
      console.log("errrrorrrr");
    } finally {
      setIsLoader(false);
    }
  }

  function handlePlaceOrder() {
    console.log("hi");
  }

  return (
    <div className="payButton">
      <button>Pay ₹{props.totalPrice}</button>
    </div>
  );
}
export default memo(PayButton);
