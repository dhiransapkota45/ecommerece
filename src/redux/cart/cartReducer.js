import { successToast } from "../../utils/toastify";
import { errorToast } from "../../utils/errorToast";

const initialState = {
  loading: false,
  error: false,
};

const addtoCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addtoCart/pending":
      return { ...state, loading: true };
    case "addtoCart/success":
      successToast("Item added successfully");
      return { ...state };
    case "addtoCart/failure":
      errorToast(action.payload);
      return { ...state, loading: false, error: action.payload };
    default:
      return { ...state };
  }
};

export default addtoCartReducer;
