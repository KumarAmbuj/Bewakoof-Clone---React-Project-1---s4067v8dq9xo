import "./login.css";
import { AuthContext } from "../../authentication/AuthContext";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

function Login() {
  const navigate = useNavigate();
  const { login, logout, SetToken } = useContext(AuthContext);
  //console.log(login, logout, SetToken);
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    appType: "ecommerce",
  });

  async function sendLoginData() {
    try {
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
        login();
        SetToken(resultResponse.token);

        navigate("/");
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
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    //console.log(loginData);
    sendLoginData();
  }

  return (
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
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="forgotPassword">Forgot Password ?</div>

        <div className="loginButton">
          <button onClick={handleSubmit}>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
