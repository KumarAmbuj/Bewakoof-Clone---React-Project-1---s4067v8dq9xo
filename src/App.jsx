import Home from "./screen/Home";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import TopNavbar from "./component/TopNavbar";
import MiddleNavbar from "./component/MiddleNavbar";
import MiniNavbar from "./component/MiniNavbar";
import Footer from "./component/Footer";
import HomePage from "./screen/HomePage";
import ProductDetails from "./pages/ProductDetails";

import SingleProductDetails from "./pages/SingleProductDetails";
import SignUp from "./pages/SignUp";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import AuthProvider from "./authentication/AuthProvider";
import Wishlist from "./pages/Wishlist";
import Checkout from "./pages/Checkout";
import ComingSoon from "./pages/ComingSoon";
import Homepage from "./pages/Homepage";

import { useEffect } from "react";

function App() {
  return (
    <>
      {/* <Home /> */}
      <div>
        <AuthProvider>
          <TopNavbar />
          <MiddleNavbar />
          <MiniNavbar />
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="product-details" element={<ProductDetails />} />
            <Route
              path="single-product-details/:productId"
              element={<SingleProductDetails />}
            />
            <Route path="signup" element={<SignUp />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={<Cart />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="coming-soon" element={<ComingSoon />} />
          </Routes>

          <Footer />
        </AuthProvider>
      </div>
    </>
  );
}

export default App;
