import { combineReducers } from "redux";
import signupReducer from "./signup/signupReducer";
import productReducer from "./product/productReducer";

const rootReducer = combineReducers({
  signup: signupReducer,
  product: productReducer,
});

export default rootReducer;
