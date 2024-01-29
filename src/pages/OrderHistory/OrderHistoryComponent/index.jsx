import "./orderHistoryComponent.css";
import { Link } from "react-router-dom";
import { useState } from "react";

function OrderHistoryComponent(props) {
  //console.log(props.data.order.items[0].product.name);
  return (
    <>
      <div className="orderNumber">
        Order# <span style={{ fontWeight: "700" }}>{props.data.order._id}</span>
      </div>
      <div className="orderHistoryComponentBox">
        <div className="orderHistoryComponentImage">
          <img src={props.data.order.items[0].product.displayImage} />
        </div>
        <div className="orderHistoryComponentText">
          <div className="productName">
            {props.data.order.items[0].product.name}
          </div>
          <div className="productSize">Size : S</div>

          <div className="productDeliveryDate">01 FEB, 2024</div>

          <div className="orderConfirmButton">
            <button>CONFIRMED</button>
          </div>

          <div className="orderInfoButton">
            <Link to={`/single-order-history/${props.data.order._id}`}>
              <button>ORDER INFO</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default OrderHistoryComponent;
