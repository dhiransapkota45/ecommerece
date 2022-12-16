const initialState = {
  modal: false,
};

const stripeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "stripe/modal":
      return { ...state, modal: !state.modal };
    default:
      return { ...state };
  }
};

export default stripeReducer;
