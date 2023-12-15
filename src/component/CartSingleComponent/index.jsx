import "./cartSingleComponent.css";
function CartSingleComponent() {
  return (
    <div className="cartSingleMainContainer">
      <div className="cartSingleComponentContainer">
        <div className="cartDetail">
          <div className="cartDetailName">Men's White T-Shirt</div>

          <div className="cartDetailPrice">
            <span className="actualPrice">₹399</span>{" "}
            <span className="deletedPrice">
              <del>₹1399</del>
            </span>
          </div>
          <div className="youSaved">You saved ₹1000!</div>
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
          <img src="./images/singleImage.webp" />
        </div>
      </div>
      <div className="borderLine"></div>

      <div className="removeMoveListButton">
        <button>Remove</button>
        <button>Move to Wishlist</button>
      </div>
    </div>
  );
}
export default CartSingleComponent;
