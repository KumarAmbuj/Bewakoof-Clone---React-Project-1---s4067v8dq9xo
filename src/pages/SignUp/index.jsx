import { useEffect, useState } from "react";
import "./signup.css";
import { Link, useNavigate } from "react-router-dom";
import Loader from "../../component/Loader";
import mixpanel from "mixpanel-browser";

function SignUp() {
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState({
    name: "",
    email: "",
    password: "",
    appType: "ecommerce",
  });

  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const [message, setMessage] = useState({});
  const [isLoader, setIsLoader] = useState(false);
  const [hidePassword, setHidePassword] = useState(true);

  async function sendSignUpData() {
    try {
      setIsLoader(true);
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/user/signup`,
        {
          method: "POST",
          body: JSON.stringify({
            ...signUpData,
          }),
          headers: {
            projectId: "zl6mct4l5ib6",
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();
      console.log("hwyyy", resultResponse);

      //console.log(result);
      if (resultResponse.status === "success") {
        setMessage(resultResponse);
        console.log("successsssss", resultResponse);
        setTimeout(() => {
          navigate("/login");
        }, 1500);
      } else {
        setMessage(resultResponse);
        navigate("/signup");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/signup");
    } finally {
      setIsLoader(false);
    }
  }

  function handleChange(e) {
    setMessage({});
    setEmailError("");
    setNameError("");
    setPasswordError("");
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }
  function handleSubmit() {
    if (
      signUpData.name.length >= 5 &&
      signUpData.email.length >= 5 &&
      signUpData.password.length >= 5 &&
      signUpData.password.length <= 15
    ) {
      sendSignUpData();
    } else {
      if (signUpData.password.length < 5) {
        setPasswordError(
          "Password must have length greater than 5 and less than 15"
        );
      }
      if (signUpData.email.length < 5) {
        setEmailError(
          "Email must have length greater than 5 and should contain @"
        );
      }
      if (signUpData.name.length < 5) {
        setNameError("Name must have length greater than 3");
      }
    }

    const userData = {
      email,
      password,
      method: 'email',
      userType: 'Free',
    };

    mixpanel.track('CONTINUE', {
      method: userData.method,
      userType: userData.userType,
      email: sendSignUpData.email,
    });
  }

  function passwordHandler() {
    setHidePassword(!hidePassword);
  }
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      {isLoader ? <Loader /> : ""}
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
            <Link to="/login">Log in</Link> /{" "}
            <span style={{ borderBottom: "5px solid yellow" }}>Sign up</span>
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
          <div style={{ color: "red" }}>{nameError}</div>

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
          <div style={{ color: "red" }}>{emailError}</div>

          <div className="inputMobileNumber" style={{ marginTop: "10px" }}>
            <div className="mobileNumber">
              <input
                type={hidePassword ? "password" : "text"}
                placeholder="password"
                name="password"
                onChange={handleChange}
              />
              <span
                style={{ marginRight: "-15px", cursor: "pointer" }}
                onClick={passwordHandler}
              >
                {hidePassword ? (
                  <i className="fa fa-eye-slash" aria-hidden="true"></i>
                ) : (
                  <i className="fa fa-eye" aria-hidden="true"></i>
                )}
              </span>
            </div>
          </div>
          <div style={{ color: "red" }}>{passwordError}</div>
          <div className="continueButton">
            <button onClick={handleSubmit}>CONTINUE</button>
          </div>
          <div
            className={`signupResponse ${
              message?.status === "fail" ? "fail" : "success"
            }`}
          >
            {message?.status === "fail"
              ? message.message
              : message?.status === "success"
              ? "User successfully signed up!"
              : ""}
          </div>
          <div className="lineOrLine">
            <div className="line"></div>
            <div className="or">OR</div>
            <div className="line"></div>
          </div>

          <div className="continueWithEmail">
            {/* <button onClick={handleSubmit}>CONTINUE WITH EMAIL</button> */}
            <span className="haveAnAccountText">
              Already have an account{" "}
              <Link to="/login" style={{ color: "blue" }}>
                login
              </Link>
            </span>
          </div>

          {/* <div className="googleFacebook">
            <button>GOOGLE</button>
            <button>FACEBOOK</button>
          </div> */}

          <div className="bottomText">
            By creating an account or logging in, you agree with Bewakoof®'s{" "}
            <span style={{ color: "blue" }}>Terms and Conditions</span> and{" "}
            <span style={{ color: "blue" }}>Privacy Policy</span>.
          </div>
        </div>
      </div>
    </>
  );
}
export default SignUp;
