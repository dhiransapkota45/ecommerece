const initialState = {
  loading: false,
  authToken: localStorage.getItem("authToken"),
  error: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case "signup/pending":
      return { ...state, loading: true };
    case "signup/success":
      console.log(action.payload.authToken, action.payload.checkbox);
      if (action.payload.checkbox === false) {
        return {
          ...state,
          loading: false,
          authToken: action.payload.authToken,
        };
      } else {
        localStorage.setItem("authToken", action.payload.authToken);
        return {
          ...state,
          loading: false,
          authToken: action.payload.authToken,
        };
      }
    case "signup/failure":
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default signupReducer;
