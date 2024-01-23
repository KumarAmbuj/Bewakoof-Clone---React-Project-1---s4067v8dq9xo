import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { projectId } from "../Constant/constant";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState(localStorage.getItem("bewakoof"));
  const [userName, setUserName] = useState("");
  const [wishlistData, setWishlistdata] = useState([]);
  const [cartData, setCartdata] = useState([]);

  //console.log(isLoggedIn, token);

  async function getWishlistDataAPI(val) {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,
        {
          method: "GET",

          headers: {
            projectId: projectId,
            Authorization: "Bearer " + token || val,
          },
        }
      );
      let resultResponse = await result.json();
      //console.log(resultResponse);
      if (resultResponse.status === "success") {
        setWishlistdata(resultResponse.data.items);
      }

      //console.log(result);
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      //navigate("/signup");
    }
  }
  async function getCartDataAPI(val) {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/cart`,
        {
          method: "GET",

          headers: {
            projectId: projectId,
            Authorization: "Bearer " + token || val,
          },
        }
      );
      let resultResponse = await result.json();
      //console.log(resultResponse);
      if (resultResponse.status === "success") {
        setCartdata(resultResponse.data.items);
      }

      //console.log(result);
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      //navigate("/signup");
    }
  }

  const login = () => {
    setIsLoggedIn(true);
  };
  const SetToken = (val) => {
    setToken(val);
    console.log(val);
    localStorage.setItem("bewakoof", val);
    getCartDataAPI(val);
    getWishlistDataAPI(val);
  };
  const logout = () => {
    setToken("");
    SetUserName("");
    setIsLoggedIn(false);
    setCartdata([]);
    setWishlistdata([]);
    localStorage.setItem("bewakoof", "");
  };

  const SetUserName = (val) => {
    setUserName(val);
  };
  useEffect(() => {
    if (localStorage.getItem("bewakoof") === null) {
      localStorage.setItem("bewakoof", "");
    } else {
      let x = localStorage.getItem("bewakoof");
      if (x) {
        setIsLoggedIn(true);
        getCartDataAPI(x);
        getWishlistDataAPI(x);
        setToken(x);
      } else {
        //setToken(localStorage.getItem("bewakoof"));
      }
    }
  }, [isLoggedIn]);

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        setIsLoggedIn,
        login,
        logout,
        SetToken,
        token,
        SetUserName,
        userName,
        wishlistData,
        getWishlistDataAPI,
        cartData,
        getCartDataAPI,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
