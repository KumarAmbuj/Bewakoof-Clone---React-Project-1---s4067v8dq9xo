import "./singleOrderHistory.css";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../authentication/AuthContext";

function SingleOrderHistory() {
  const { token, addressName, addressNumber } = useContext(AuthContext);
  console.log(addressName, addressNumber);
  const { orderId } = useParams();

  const [orderData, setOrderData] = useState({});

  async function getSingleOrderData() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/order/${orderId}`,
        {
          method: "GET",

          headers: {
            projectId: "zl6mct4l5ib6",
            Authorization: "Bearer " + token,
          },
        }
      );
      let resultResponse = await result.json();
      console.log(resultResponse);

      if (resultResponse.status === "success") {
        setOrderData(resultResponse.data);
        console.log(orderData.items[0].product.name);
      }
    } catch {
      console.log("errorrrrrrrrrrrr");
      //navigate("/");
    }
  }

  useEffect(() => {
    getSingleOrderData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="singleOrderContainer">
      <div className="orderDetailPriceFlex">
        <div className="orderDetailContainer">
          <div className="orderTextFlex">
            <div>ORDER# {orderData?._id}</div>
            <div>ORDER PLACED {orderData?.orderDate}</div>
          </div>

          <div className="orderImageTextFlex">
            <div className="orderImage">
              <img
                src={
                  orderData?.items && orderData?.items[0]?.product?.displayImage
                }
              />
            </div>
            <div className="orderDescription">
              <div>
                <button>ORDER CONFIRMED</button>
              </div>
              <div className="orderedProductName">
                {orderData?.items && orderData?.items[0]?.product?.name}
              </div>
              <div className="orderedProductName" style={{ color: "grey" }}>
                Size: {orderData?.items && orderData?.items[0]?.size}
              </div>
              <div className="orderedProductName">
                Rs. {orderData?.items && orderData?.items[0]?.product?.price}
              </div>
            </div>
          </div>
          <div className="orderAddressBox">
            <button>OTHER</button>
            <div className="AddressNameNumber">
              {addressName} | {addressNumber}
            </div>
            <div className="AddressText">
              {orderData.shipmentDetails &&
                `${orderData?.shipmentDetails.address.street}, ${orderData?.shipmentDetails.address.city}, ${orderData?.shipmentDetails.address.zipCode}, ${orderData?.shipmentDetails.address.state}, ${orderData?.shipmentDetails.address.country}`}
            </div>
          </div>
        </div>

        <div className="orderPriceContainer">
          <div className="shippingDetail">
            <div className="shipping">SHIPPING DETAILS</div>
            <div className="shippingName">{addressName}</div>
            <div className="shippingAddress">
              {orderData.shipmentDetails &&
                `${orderData?.shipmentDetails.address.street}, ${orderData?.shipmentDetails.address.city}, ${orderData?.shipmentDetails.address.zipCode}, ${orderData?.shipmentDetails.address.state}, ${orderData?.shipmentDetails.address.country}`}
            </div>
          </div>

          <div className="orderPaymentSummary">
            <div className="shipping">PAYMENT SUMMARY</div>
            <div className="shippingPriceFlex">
              <div>Cart Total</div>
              <div>₹ {orderData?.totalPrice}</div>
            </div>
            <div className="shippingPriceFlex">
              <div>Delivery Fee</div>
              <div>₹ 0</div>
            </div>
            <div className="shippingPriceFlex">
              <div>COD</div>
              <div>₹ 20</div>
            </div>
            <div className="shippingPriceFlex">
              <div>Order Total</div>
              <div>₹ {orderData.totalPrice && orderData?.totalPrice + 20}</div>
            </div>

            <div className="shippingPriceFlex">
              <div style={{ color: "black", fontWeight: "700" }}>
                Amount to be paid
              </div>
              <div style={{ color: "black", fontWeight: "700" }}>
                ₹ {orderData.totalPrice && orderData?.totalPrice + 20}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default SingleOrderHistory;
