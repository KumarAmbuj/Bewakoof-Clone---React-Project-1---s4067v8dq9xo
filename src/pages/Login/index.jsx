import "./login.css";
import { AuthContext } from "../../authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import Loader from "../../component/Loader";
import { Link } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const { login, logout, SetToken, SetUserName } = useContext(AuthContext);
  //console.log(login, logout, SetToken);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    appType: "ecommerce",
  });
  const [isLoader, setIsLoader] = useState(false);
  const [message, setMessage] = useState({});
  const [hidePassword, setHidePassword] = useState(true);

  async function sendLoginData() {
    try {
      setIsLoader(true);
      let result = await fetch(
        `https://academics.newtonschool.co/api/v1/user/login`,
        {
          method: "POST",
          body: JSON.stringify({
            ...loginData,
          }),
          headers: {
            projectId: "zl6mct4l5ib6",
            "Content-Type": "application/json",
          },
        }
      );
      let resultResponse = await result.json();
      //console.log(resultResponse);

      //console.log(result);
      if (resultResponse.status === "success") {
        //console.log("usernameeeeee", resultResponse.name);
        login();
        SetToken(resultResponse.token);
        SetUserName(resultResponse.data.name);
        setMessage(resultResponse);
        navigate("/");
      } else {
        setMessage(resultResponse);
        navigate("/login");
      }
    } catch {
      //toast.error("Some error occured");
      console.log("errorrrrrrrrrrrr");
      navigate("/login");
    } finally {
      setIsLoader(false);
    }
  }

  function handleChange(e) {
    setMessage({});
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    //console.log(loginData);
    sendLoginData();
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
      <div className="loginContainer">
        <div className="loginInnerContainer">
          <div className="loginHeading">Login to your account</div>
          <div className="loginInputField">
            <input
              type="email"
              placeholder="Email"
              name="email"
              onChange={handleChange}
            />
          </div>
          <div className="loginInputField">
            <input
              type={hidePassword ? "password" : "text"}
              placeholder="Password"
              name="password"
              onChange={handleChange}
            />
            <span
              style={{ marginLeft: "-15px", cursor: "pointer" }}
              onClick={passwordHandler}
            >
              {hidePassword ? (
                <i class="fa fa-eye-slash" aria-hidden="true"></i>
              ) : (
                <i class="fa fa-eye" aria-hidden="true"></i>
              )}
            </span>
          </div>
          <div
            className={`loginResponse ${
              message?.status === "fail" ? "fail" : "success"
            }`}
          >
            {message?.message}
          </div>
          <div className="forgotPassword" style={{ display: "none" }}>
            Forgot Password ?
          </div>

          <div className="loginButton">
            <button onClick={handleSubmit}>LOGIN</button>
          </div>
          <div className="loginHaveAnAcoountText">
            Don't have an account{" "}
            <Link to="/signup" style={{ color: "blue" }}>
              signup
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
