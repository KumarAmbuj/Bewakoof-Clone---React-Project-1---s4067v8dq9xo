import React, { useState } from "react";
import { AuthContext } from "./AuthContext";

function AuthProvider({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setoken] = useState("");
  const login = () => {};
  const logout = () => {};

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
