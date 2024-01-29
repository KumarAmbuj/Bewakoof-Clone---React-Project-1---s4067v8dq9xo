import OrderHistoryComponent from "./OrderHistoryComponent";
import "./orderHistory.css";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import OrderHistoryEmptyComponent from "../../component/OrderHistoryEmptyComponent";

function OrderHistory() {
  const { token } = useContext(AuthContext);
  const [orderData, setOrderData] = useState([]);
  const navigate = useNavigate();

  async function getOrderData() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/order/`,
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

      if (resultResponse.status === "success") {
        setOrderData(resultResponse.data);
        //console.log(orderData);
      }
    } catch {
      console.log("errorrrrrrrrrrrr");
      //navigate("/");
    }
  }

  useEffect(() => {
    getOrderData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className="orderHistoryContainer">
        <div className="orderHistoryText">Order History</div>
        {orderData.length > 0 ? (
          orderData.reverse().map((val) => {
            return <OrderHistoryComponent data={val} key={val.order._id} />;
          })
        ) : (
          <OrderHistoryEmptyComponent />
        )}
      </div>
    </>
  );
}
export default OrderHistory;
