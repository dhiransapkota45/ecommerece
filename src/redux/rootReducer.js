import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import productReducer from "./product/productReducer";
import loginReducer from "./login/loginReducer";
import cartReducer from "./cart/cartReducer";
import changeCartNumberReducer from "./cart/changeCartNumberReducers";
import cartnumberReducer from "./cart/cartnumberReducer";
import getCartReducer from "./cart/getCartReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  product: productReducer,
  login: loginReducer,
  cart: cartReducer,
  changeCartNumber: changeCartNumberReducer,
  cartnumber: cartnumberReducer,
  getcart: getCartReducer,
});

export default rootReducer;
