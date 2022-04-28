export const LoginStart = (userCredentials) => ({
    type: "LOGIN_START",
  });
  
  export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: user,
  });
  
  export const LoginFailure = () => ({
    type: "LOGIN_FAILURE",
  });

  export const Friend = (userID)=>({
    type:"FRIEND",
    payload:userID,
  });

  export const UnFriend = (userID)=>({
    type:"UNFRIEND",
    payload:userID,
  });