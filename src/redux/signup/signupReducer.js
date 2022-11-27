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
      return { ...state, loading: false };
    case "signup/failure":
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default signupReducer;
