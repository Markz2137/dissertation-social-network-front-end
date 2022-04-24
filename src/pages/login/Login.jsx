import {useContext, useRef} from "react";
import "./login.css";
import { callLogin } from "../../apiCalls";
import {AuthContext} from "../../context/AuthContext"
import {CircularProgress} from "@mui/material"
import { useNavigate } from "react-router-dom";



export default function Login() {
  const email = useRef();
  const password = useRef();
  const{user, isFetching, error, dispatch} = useContext(AuthContext);
  const navigate = useNavigate();


  const registerClick = async (e) =>{
    e.preventDefault();
    try{
    await callLogin({email: email.current.value, password: password.current.value}, dispatch);
    navigate("/");
    }
    catch
    {

    }
  };
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
            <h3 className="loginLogo">SafeBook</h3>
            <span className="loginDesc">Connect with the world in an environment where you're safe to express yourself.</span>
            </div>
            <div className="loginRight">
                <form className="loginBox" onSubmit={registerClick}>
                    <input placeholder = "Email" type="email" required className="loginInput" ref={email} />
                    <input placeholder = "Password" type="password" required minLength={6} className="loginInput" ref={password}/>

                    <button className="loginButton" type="submit" disabled={isFetching}>{isFetching ? <CircularProgress size="20px"/>  : "Log In"}</button>

                    <span className="loginForgot">Forgot Password?</span>

                    <button className="loginRegisterButton">{isFetching? <CircularProgress size="20px"/>  : "Dont Have an Account?"}</button>
                </form>
            </div>
        </div>
    </div>
  )
}
