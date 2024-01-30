import { useEffect, useState } from "react";
import WishlistCard from "../../component/WishlistCard";
import WishlistEmpty from "../../component/WishlistEmpty";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import { projectId } from "../../Constant/constant";
import "./wishlist.css";
import Loader from "../../component/Loader";
function Wishlist() {
  const { isLoggedIn, logout, token, wishlistData, getWishlistDataAPI } =
    useContext(AuthContext);

  const [isLoader, setIsLoader] = useState(false);

  async function deleteAllWishlist() {
    try {
      //setIsLoader(true);
      const response = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist/`,
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

  async function handleDeleteAllWishlist() {
    await deleteAllWishlist();
    await getWishlistDataAPI();
  }

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
            <button onClick={handleDeleteAllWishlist}>Clear Wishlist</button>
          </div>
          <div className="wishlistContainer">
            {wishlistData
              .slice()
              .reverse()
              .map((val) => {
                return <WishlistCard data={val} key={val.products._id} />;
              })}
          </div>
        </div>
      )}
    </>
  );
}
export default Wishlist;
