import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import productReducer from "./product/productReducer";
import loginReducer from "./login/loginReducer";
import cartReducer from "./cart/cartReducer";
import changeCartNumberReducer from "./cart/changeCartNumberReducers";

const rootReducer = combineReducers({
  signup: signupReducer,
  product: productReducer,
  login: loginReducer,
  cart: cartReducer,
  changeCartNumber: changeCartNumberReducer,
});

export default rootReducer;
