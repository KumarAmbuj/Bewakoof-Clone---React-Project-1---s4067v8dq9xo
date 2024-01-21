import "./emptyCart.css";
import { memo } from "react";
function CartEmpty() {
  return (
    <div>
      <div className="CartUpperContainer">
        <div className="cartEmptyImage">
          <img src="./images/emptyCartImage.png" />
        </div>
        <div className="nothingInTheBag">Nothing in the bag</div>
        <div className="continueShopping">
          <button>Continue Shopping</button>
        </div>
        <div className="borderLine"></div>
        <div className="emptyText">You could try one of these categories:</div>

        <div className="categoryLinks">
          <div className="categoryLinkChild">
            <div className="linkHeader">Men</div>
            <div>
              <div className="catLink">Topwear</div>
              <div className="catLink">Footwear</div>
            </div>
            <div>
              <div className="catLink">Bottomwear</div>
              <div className="catLink">Bestsellers</div>
            </div>
          </div>
          <div className="categoryLinkChild">
            <div className="linkHeader">Women</div>
            <div>
              <div className="catLink">Topwear</div>
              <div className="catLink">Footwear</div>
            </div>
            <div>
              <div className="catLink">Bottomwear</div>
              <div className="catLink">Bestsellers</div>
            </div>
          </div>
          <div className="categoryLinkChild">
            <div className="linkHeader">Mobile Covers</div>
            <div>
              <div className="catLink">All Mobile Covers</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(CartEmpty);
