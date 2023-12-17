import TopNavbar from "../../component/TopNavbar";
import MiddleNavbar from "../../component/MiddleNavbar";
import MiniNavbar from "../../component/MiniNavbar";
import Footer from "../../component/Footer";
import HomePage from "../HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductDetails from "../../pages/ProductDetails";
import SingleProductDetails from "../../pages/SingleProductDetails";
import SignUp from "../../pages/SignUp";
import Cart from "../../pages/Cart";
import Login from "../../pages/Login";
import AuthProvider from "../../authentication/AuthProvider";
import Wishlist from "../../pages/Wishlist";

function Home() {
  return (
    <div>
      <AuthProvider>
        <TopNavbar />
        <MiddleNavbar />
        <MiniNavbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product-details" element={<ProductDetails />} />
          <Route
            path="single-product-details/:productId"
            element={<SingleProductDetails />}
          />
          <Route path="signup" element={<SignUp />} />
          <Route path="login" element={<Login />} />
          <Route path="cart" element={<Cart />} />
          <Route path="wishlist" element={<Wishlist />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </div>
  );
}
export default Home;
