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
      return { ...state, loadingLogin: false };
    case "login/failure":
      return { ...state, loadingLogin: false, errorLogin: action.payload };
    default:
      return { ...state };
  }
};

export default loginReducer;
