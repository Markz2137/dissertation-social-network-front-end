const initialState = [];
export const initializer = (initialValue = initialState) =>
  JSON.parse(localStorage.getItem("user")) || initialValue

const AuthReducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_START":
      return {
        user: null,
        isFetching: true,
        error: false,
      };
    case "LOGIN_SUCCESS":
      return {
        user: action.payload,
        isFetching: false,
        error: false,
      };
    case "LOGIN_FAILURE":
      return {
        user: null,
        isFetching: false,
        error: true,
      };

      case "FRIEND":
        return {
          ...state,
          user: {
            ...state.user,
            friends: [...state.user.friends, action.payload],
          },
        };

        case "UNFRIEND":
        return {
          ...state,
          user: {
            ...state.user,
            friends: state.user.friends.filter((friends)=>friends !== action.payload),
          },
        };


    default:
      return state;
  }
  

};
  export default AuthReducer;

            
