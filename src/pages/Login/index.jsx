import "./login.css";
function Login() {
  return (
    <div className="loginContainer">
      <div className="loginInnerContainer">
        <div className="loginHeading">Login to your account</div>
        <div className="loginInputField">
          <input type="email" placeholder="Email" />
        </div>
        <div className="loginInputField">
          <input type="text" placeholder="Password" />
        </div>
        <div className="forgotPassword">Forgot Password ?</div>

        <div className="loginButton">
          <button>LOGIN</button>
        </div>
      </div>
    </div>
  );
}
export default Login;
