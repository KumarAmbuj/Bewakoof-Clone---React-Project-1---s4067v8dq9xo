import "./cartSingleComponent.css";
import { memo } from "react";

import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader";

//functions
import { addToWishlistDataAPI } from "../../ConstantAPI/constantAPI";
import { removeFromCartAPI } from "../../ConstantAPI/constantAPI";

import { projectId } from "../../Constant/constant";

function CartSingleComponent(props) {
  const { deleteHandler } = props;
  const {
    isLoggedIn,
    logout,
    token,
    wishlistData,
    getWishlistDataAPI,
    getCartDataAPI,
    loader,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  function addToWishlist() {
    let id = props.data.product._id;
    addToWishlistDataAPI(id, projectId, token);
    removeFromCartAPI(id, projectId, token);
    getWishlistDataAPI();
    getWishlistDataAPI();
    getCartDataAPI();
    getCartDataAPI();
  }

  return (
    <>
      {loader ? <Loader /> : ""}
      <div className="cartSingleMainContainer">
        <div className="cartSingleComponentContainer">
          <div className="cartDetail">
            <div className="cartDetailName">{props.data.product.name}</div>

            <div className="cartDetailPrice">
              <span className="actualPrice">₹{props.data.product.price}</span>{" "}
              <span className="deletedPrice">
                <del>
                  ₹
                  {props.data.product.price +
                    Math.floor(props.data.product.price / 2)}
                </del>
              </span>
            </div>
            <div className="youSaved">
              You saved ₹{Math.floor(props.data.product.price / 2)}!
            </div>
            <div className="sizeAndQuantity">
              <div className="selectOption">
                Size:
                <select>
                  <option>S</option>
                  <option>L</option>
                  <option>XL</option>
                  <option>XXL</option>
                </select>
              </div>

              <div className="selectOption">
                Qty:
                <select>
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                </select>
              </div>
            </div>
          </div>

          <div className="cartImage">
            <img src={props.data.product.displayImage} />
          </div>
        </div>
        <div className="borderLine"></div>

        <div className="removeMoveListButton">
          <button onClick={deleteHandler}>Remove</button>
          <button onClick={addToWishlist}>Move to Wishlist</button>
        </div>
      </div>
    </>
  );
}
export default memo(CartSingleComponent);
