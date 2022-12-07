const initialState = {
  loading: false,
  error: false,
  cartdetails: [],
  cartcount: 0,
};

const getCartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "getcart/pending":
      return { ...state, loading: true };
    case "getcart/success":
      return {
        ...state,
        loading: false,
        cartdetails: action.payload,
        cartcount: action.payload.length,
      };
    case "getcart/failure":
      return {
        ...state,
        loading: false,
        error: action.payload,
        cartdetails: [],
      };
    default:
      return { ...state };
  }
};

export default getCartReducer;
