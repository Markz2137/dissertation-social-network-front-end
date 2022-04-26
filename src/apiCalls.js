import axios from "axios";

export const callLogin = async (userCredential, dispatch) => {
  
  dispatch({ type: "LOGIN_START" });
  try {
    const res = await axios.post("/auth/login", userCredential);
    dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
  } catch (err) {
    dispatch({ type: "LOGIN_FAIL", payload: err });
  }
};
