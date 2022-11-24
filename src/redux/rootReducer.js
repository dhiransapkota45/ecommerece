import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import productReducer from "./product/productReducer";
import loginReducer from "./login/loginReducer";
import cartReducer from "./cart/cartReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  product: productReducer,
  login: loginReducer,
  cart: cartReducer,
});

export default rootReducer;
