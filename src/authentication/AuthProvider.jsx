import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  console.log(isLoggedIn, token);
  const login = () => {
    setIsLoggedIn(true);
  };
  const SetToken = (val) => {
    setToken(val);
  };
  const logout = () => {
    setToken("");
    setIsLoggedIn(false);
  };

  return (
    <AuthContext.Provider
      value={{ isLoggedIn, setIsLoggedIn, login, logout, SetToken, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
