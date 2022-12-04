export const incrementItem = () => {
  return {
    type: "cartitem/increment",
  };
};

export const decrementItem = (id) => {
  return {
    type: "cartitem/decrement",
    payload:id
  };
};

export const accessItemNumber = () => {
  return {
    type: "cartitem/accessItemNumber",
  };
};
