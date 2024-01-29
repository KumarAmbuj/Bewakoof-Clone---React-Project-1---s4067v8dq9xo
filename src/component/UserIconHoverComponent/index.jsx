import "./userIconHoverComponent.css";
import { AuthContext } from "../../authentication/AuthContext";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
function UserIconHoverComponent() {
  const navigate = useNavigate();
  const { userName, logout } = useContext(AuthContext);
  function handleLogout() {
    navigate("/");
    logout();
  }
  return (
    <div className="userIconOnHoverContainer">
      <div className="userMenuName">Hi {userName}</div>
      <Link to="/wishlist">
        <div className="userMenu">My Wishlist</div>
      </Link>
      <Link to="/cart">
        <div className="userMenu">My Cart</div>
      </Link>
      <Link to="/order-history">
        <div className="userMenu">My Order</div>
      </Link>
      <div className="userMenu" onClick={handleLogout}>
        Logout
      </div>
    </div>
  );
}
export default UserIconHoverComponent;
