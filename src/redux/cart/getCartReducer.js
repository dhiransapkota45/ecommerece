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

    case "getcart/deleteonecartitem":
      let data = state.cartdetails.filter(
        (data) => data.productdetails._id !== action.payload
      );
      return { ...state, cartdetails: data, cartcount: state.cartcount - 1 };

    case "getcart/addtocarticon":
      return { ...state, cartcount: state.cartcount + 1 };

    case "getcart/increment":
      let details = state.cartdetails;
      details.find((item) => item.productdetails._id === action.payload)
        .cartItems.quantity++;
      return { ...state, cartdetails: details };

    case "getcart/decrement":
      let details2 = state.cartdetails;
      details2.find((item) => item.productdetails._id === action.payload)
        .cartItems.quantity--;
      return { ...state, cartdetails: details2 };

    default:
      return { ...state };
  }
};

export default getCartReducer;
