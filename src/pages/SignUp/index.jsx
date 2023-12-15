import { useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";

function SignUp() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "ecommerce",
  });

  async function sendSignUpData() {
    try {
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/user/signup`,
        {
          method: "POST",
          BODY: JSON.stringify({ ...signUpData }),
          headers: {
            projectId: "zl6mct4l5ib6",
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();
      console.log(resultResponse);

      //console.log(result);
      if (resultResponse.status === "success") {
        navigate("/login");
      } else {
        navigate("/signup");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/signup");
    }
  }

  function handleChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    console.log(signUpData);
    //
    sendSignUpData();
  }
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
            <input
              type="text"
              placeholder="Name"
              name="name"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inputMobileNumber" style={{ marginTop: "10px" }}>
          <div className="mobileNumber">
            <input
              type="email"
              placeholder="Email Id"
              name="email"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="inputMobileNumber" style={{ marginTop: "10px" }}>
          <div className="mobileNumber">
            <input
              type="password"
              placeholder=""
              name="password"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="continueButton">
          <button onClick={handleSubmit}>CONTINUE</button>
        </div>

        <div className="lineOrLine">
          <div className="line"></div>
          <div className="or">OR</div>
          <div className="line"></div>
        </div>

        <div className="continueWithEmail">
          <button onClick={handleSubmit}>CONTINUE WITH EMAIL</button>
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
