import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import productReducer from "./product/productReducer";
import loginReducer from "./login/loginReducer";
import cartReducer from "./cart/cartReducer";
import getCartReducer from "./cart/getCartReducer";
import stripeReducer from "./stripeformmodal/stripeformReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  product: productReducer,
  login: loginReducer,
  cart: cartReducer,
  getcart: getCartReducer,
  stripe: stripeReducer,
});

export default rootReducer;
