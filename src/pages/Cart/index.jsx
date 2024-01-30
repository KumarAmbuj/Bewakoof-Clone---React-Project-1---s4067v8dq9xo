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
  //const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoader ? <Loader /> : ""}
      <div>{cartData.length == 0 ? <CartEmpty /> : <CartFull />}</div>
    </>
  );
}
export default Cart;
