import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { projectId } from "../Constant/constant";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  const [userName, setUserName] = useState("");
  const [wishlistData, setWishlistdata] = useState([]);

  //console.log(isLoggedIn, token);

  async function getWishlistDataAPI() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/ecommerce/wishlist`,
        {
          method: "GET",

          headers: {
            projectId: projectId,
            Authorization: "Bearer " + token,
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
  useEffect(() => {
    getWishlistDataAPI();
  }, [token]);
  const login = () => {
    setIsLoggedIn(true);
  };
  const SetToken = (val) => {
    setToken(val);
  };
  const logout = () => {
    setToken("");
    SetUserName("");
    setIsLoggedIn(false);
  };

  const SetUserName = (val) => {
    setUserName(val);
  };

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
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
