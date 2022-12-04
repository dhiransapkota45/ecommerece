const initialState = [];

const changeCartNumberReducer = (state = initialState, action) => {
  switch (action.type) {
    case "cartitem/increment":
      console.log("reached here");
      // const findProduct = action.payload.find()
      return { ...state, value: state.value + 1 };
    case "cartitem/decrement":
      console.log(action.payload);
      const itemExists = state.filter((id) => id === action.payload._id);
      console.log(itemExists);
      if (itemExists.length === 0) {
        return state.push({
          id: action.payload._id,
          count: action.payload.count,
        });
        return [
          ...state,
          { id: action.payload._id, count: action.payload.count },
        ];
      }
    //   return;
    // }
    // return { ...state, value: state.value - 1 };

    case "cartitem/accessItemNumber": {
      return state;
    }
    default:
      return state;
  }
};

export default changeCartNumberReducer;
