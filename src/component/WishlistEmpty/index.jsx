import "./wishlistEmpty.css";
import { Link } from "react-router-dom";
import { memo } from "react";
function WishlistEmpty() {
  return (
    <div className="wishlistEmpty">
      <div className="emptyWishlistImage">
        <img src="https://images.bewakoof.com/web/wishlistEmpty.svg" />
      </div>
      <div className="boldText">Hey! Your wishlist is empty.</div>

      <div className="lightText">
        Save your favourites here and make them yours soon!
      </div>
      <div className="shopNowButton">
        <Link to="/">
          {" "}
          <button>SHOP NOW</button>
        </Link>
      </div>
    </div>
  );
}
export default memo(WishlistEmpty);
