const initialState = {
  count: 0,
};

const cartnumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cart/cartnumber":
      return { ...state, count: action.payload };
    default:
      return { ...state };
  }
};

export default cartnumberReducer;
