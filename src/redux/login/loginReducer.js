const initialState = {
  loadingLogin: false,
  authTokenLogin: localStorage.getItem("authToken"),
  errorLogin: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "login/error":
      return { ...state, errorLogin: "" };
    case "login/pending":
      return { ...state, loadingLogin: true };
    case "login/success":
      console.log(action.payload.authToken, action.payload.checkbox);
      if (action.payload.checkbox === false) {
        return {
          ...state,
          loadingLogin: false,
          authTokenLogin: action.payload.authToken,
        };
      } else {
        localStorage.setItem("authToken", action.payload.authToken);
        return {
          ...state,
          loadingLogin: false,
          authTokenLogin: action.payload.authToken,
        };
      }
    case "login/failure":
      return { ...state, loadingLogin: false, errorLogin: action.payload };
    default:
      return { ...state };
  }
};

export default loginReducer;
