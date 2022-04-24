import axios from "axios";
import { useRef } from "react";
import "./register.css";
import {useNavigate} from "react-router";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const passwordTwo = useRef();
  const navigate = useNavigate();

  const registerClick = async (e) =>{
    e.preventDefault();
    if(passwordTwo.current.value !== password.current.value)
    {
      passwordTwo.current.setCustomValidity("Make sure the passwords match!")
    } else{
      const user = {
        username: username.current.value,
        email: email.current.value,
        password: password.current.value,
      };
      try{
        await axios.post("/auth/register", user);
        navigate("/login");

      }catch(err){
        console.log(err);
      }
      
    }
  }
  return (
    <div className="register">
        <div className="registerWrapper">
            <div className="registerLeft">
            <h3 className="registerLogo">SafeBook</h3>
            <span className="registerDesc">Connect with the world in an environment where you're safe to express yourself.</span>
            </div>
            <div className="registerRight">
                <form className="registerBox" onSubmit= {registerClick}>
                    <input placeholder = "Username" required ref={username} className="registerInput" /> 
                    <input placeholder = "Email" required type="email" ref={email} className="registerInput" />
                    <input placeholder = "Password" required type="password" minLength={6} ref={password} className="registerInput" />
                    <input placeholder = "Re-Enter Password" required type="password"  ref={passwordTwo} className="registerInput" />
                    <button className="registerButton" type="submit">Register</button>
                    <span className="registerForgot">Forgot Password?</span>
                    <button className="registerRegisterButton">Already Have an Account?</button>
                </form>
            </div>
        </div>
    </div>
  )
}
