import { useEffect, useState } from "react";
import WishlistCard from "../../component/WishlistCard";
import WishlistEmpty from "../../component/WishlistEmpty";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";

import "./wishlist.css";
function Wishlist() {
  const { isLoggedIn, logout, token } = useContext(AuthContext);
  const [wishlistData, setWishlistData] = useState([]);

  async function getWishlistData() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,
        {
          method: "GET",

          headers: {
            projectId: "zl6mct4l5ib6",
            Authorization: "Bearer " + token,
          },
        }
      );
      let resultResponse = await result.json();
      //console.log("data", resultResponse.data.items);
      //setWishlistData(resultResponse?.data?.items);
      //console.log("stateeeeeee", wishlistData);
      //console.log(result);
      if (resultResponse.status === "success") {
        setWishlistData(resultResponse?.data?.items);
      } else {
        navigate("/");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/");
    }
  }
  useEffect(() => {
    getWishlistData();
  }, []);
  return (
    <>
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
