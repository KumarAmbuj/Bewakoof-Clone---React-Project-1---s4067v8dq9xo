import "./signup.css";
import { Link } from "react-router-dom";
function SignUp() {
  return (
    <div className="signupContainer">
      <div className="loginLeft">
        <h2 className="loginLeftHeading">
          Welcome to the world of Bewakoof
          <span style={{ fontSize: "8px", marginTop: "-1.2rem" }}>®</span>!
        </h2>
        <div className="loginImage">
          <img src="./images/loginImage.webp" />
        </div>
      </div>
      <div className="loginRight">
        <div className="signupLogin">
          <Link to="/login">Log in</Link> / Sign up
        </div>

        <div className="loginText">
          for Latest trends, exciting offers and everything Bewakoof®!
        </div>
        <div className="inputMobileNumber">
          <div className="mobileNumber">
            <input type="text" placeholder="Name" />
          </div>
        </div>

        <div className="inputMobileNumber" style={{ marginTop: "10px" }}>
          <div className="mobileNumber">
            <input type="email" placeholder="Email Id" />
          </div>
        </div>

        <div className="inputMobileNumber" style={{ marginTop: "10px" }}>
          <div className="mobileNumber">
            <input type="password" placeholder="" />
          </div>
        </div>
        <div className="continueButton">
          <button>CONTINUE</button>
        </div>

        <div className="lineOrLine">
          <div className="line"></div>
          <div className="or">OR</div>
          <div className="line"></div>
        </div>

        <div className="continueWithEmail">
          <button>CONTINUE WITH EMAIL</button>
        </div>

        <div className="googleFacebook">
          <button>GOOGLE</button>
          <button>FACEBOOK</button>
        </div>

        <div className="bottomText">
          By creating an account or logging in, you agree with Bewakoof®'s{" "}
          <span style={{ color: "blue" }}>Terms and Conditions</span> and{" "}
          <span style={{ color: "blue" }}>Privacy Policy</span>.
        </div>
      </div>
    </div>
  );
}
export default SignUp;
