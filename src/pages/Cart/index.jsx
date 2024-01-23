import { useEffect, useState } from "react";
import CartEmpty from "../../component/CartEmpty";
import CartFull from "../../component/CartFull";
import "./cart.css";

import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";

function Cart() {
  const [isLoader, setIsLoader] = useState(false);
  const { isLoggedIn, logout, token, cartData, getCartDataAPI } =
    useContext(AuthContext);
  const navigate = useNavigate();

  // async function getCartData() {
  //   try {
  //     setIsLoader(true);
  //     let result = await fetch(
  //       `https://academics.newtonschool.co/api/v1/ecommerce/cart`,
  //       {
  //         method: "GET",

  //         headers: {
  //           projectId: "zl6mct4l5ib6",
  //           Authorization: "Bearer " + token,
  //         },
  //       }
  //     );
  //     let resultResponse = await result.json();
  //     //console.log(resultResponse);

  //     //console.log(result);
  //     if (resultResponse.status === "success") {
  //       setCartDat(resultResponse.data.items);
  //       //console.log(cartData);
  //     } else {
  //       navigate("/");
  //     }
  //   } catch {
  //     console.log("errorrrrrrrrrrrr");
  //     navigate("/");
  //   } finally {
  //     setIsLoader(false);
  //   }
  // }

  useEffect(() => {
    //getCartData();
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoader ? <Loader /> : ""}
      <div>
        {cartData.length == 0 ? <CartEmpty /> : <CartFull />}
        {/* <CartEmpty /> */}
        {/* <CartFull /> */}
      </div>
    </>
  );
}
export default Cart;
