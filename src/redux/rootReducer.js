import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import productReducer from "./product/productReducer";
import loginReducer from "./login/loginReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  product: productReducer,
  login: loginReducer,
});

export default rootReducer;
