import { useEffect, useState } from "react";
import WishlistCard from "../../component/WishlistCard";
import WishlistEmpty from "../../component/WishlistEmpty";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";

import "./wishlist.css";
import Loader from "../../component/Loader";
function Wishlist() {
  const { isLoggedIn, logout, token, wishlistData } = useContext(AuthContext);

  const [isLoader, setIsLoader] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <>
      {isLoader ? <Loader /> : ""}
      {wishlistData.length == 0 ? (
        <WishlistEmpty />
      ) : (
        <div className="wishlistMainContainer">
          <div className="topButton">
            <button style={{ backgroundColor: "#ffc700" }}>All</button>
            <button>Tshirt</button>
          </div>
          <div className="wishlistContainer">
            {wishlistData
              .slice()
              .reverse()
              .map((val) => {
                return <WishlistCard data={val} key={val.products._id} />;
              })}
            {/* <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard />
            <WishlistCard /> */}
          </div>
        </div>
      )}
    </>
  );
}
export default Wishlist;
