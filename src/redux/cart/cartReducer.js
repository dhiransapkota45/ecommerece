import { successToast } from "../../utils/toastify";

const initialState = {
  loading: false,
};

const addtoCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "addtoCart/pending":
      return { ...state, loading: true };
    case "addtoCart/success":
      successToast("item added successfully");
      return { ...state };
    case "addtoCart/failure":
      successToast("some error occured");
      return { ...state, loadingLogin: false, errorLogin: action.payload };
    default:
      return { ...state };
  }
};

export default addtoCartReducer;
