import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">SafeBook</h3>
            <span className="loginDesc">Connect with the world in an environment where you're safe to express yourself.</span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeHolder = "Email" className="loginInput" />
                    <input placeHolder = "Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Dont Have an Account?</button>
                </div>
            </div>
        </div>
    </div>
  )
}
