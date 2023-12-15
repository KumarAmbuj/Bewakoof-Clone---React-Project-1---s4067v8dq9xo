import "./sideNavbar.css";
function SideNavbar({ hideNavbar }) {
  return (
    <>
      <div className="overlay" onClick={hideNavbar} />
      <div className="side">
        <div className="guest">Welcome Guest</div>
        <div className="loginSignup">Login / Sign Up</div>
        <div className="Line"></div>
        <div className="flag">
          <img src="./images/indiaFlag.png" />
          <span>India</span>
        </div>
        <div className="shopin">SHOP IN</div>
        <div className="firstMenu">
          <div className="menu">
            <div className="text">Men</div>
            <div className="icon">
              <img src="https://images.bewakoof.com/nav_menu/Circle-icon-men--1--1684748735.png" />
            </div>
          </div>
          <div className="menu">
            <div className="text">Women</div>
            <div className="icon">
              <img src="https://images.bewakoof.com/nav_menu/Circle-icon-women--1--1684748736.png" />
            </div>
          </div>
          <div className="menu">
            <div className="text">Shop by Fandom</div>
            <div className="icon">
              <img src="https://images.bewakoof.com/nav_menu/Circle-icon-character-shop--1--1684748738.png" />
            </div>
          </div>
          <div className="menu">
            <div className="text">Customize your Own T-shirt</div>
            <div className="icon">
              <img src="https://images.bewakoof.com/nav_menu/Circle-icon-customisation--1--1684748736.png" />
            </div>
          </div>
          <div className="menu">
            <div className="text">Mobile Covers</div>
          </div>
        </div>
        <div className="secondMenu">
          <div className="contactUs">CONTACT US</div>
          <div className="text">Help & Support</div>
          <div className="text">Feedback & Suggestions</div>
          <div className="text">Become a Seller</div>
          <div className="contactUs">ABOUT US</div>
          <div className="text">Our Story</div>
          <div className="text">Fanbook</div>
          <div className="text">Blog</div>
        </div>
        <div className="loginText">Login</div>
      </div>
    </>
  );
}
export default SideNavbar;
