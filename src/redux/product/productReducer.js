const initialState = {
  loading: false,
  product: [],
  error: "",
};

const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "product/pending":
      return {
        ...state,
        loading: true,
      };
    case "product/success":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "product/failure":
      return {
        ...state,
        loading: false,
        product: [],
        error: "error occured",
      };
    default:
      return { ...state };
  }
};

export default productReducer;
