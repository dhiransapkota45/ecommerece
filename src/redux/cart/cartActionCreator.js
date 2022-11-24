import axios from "axios";

const addtoCartPending = () => {
  return {
    type: "addtoCart/pending",
  };
};

const addtoCartSuccess = () => {
  return {
    type: "addtoCart/success",
  };
};

const addtoCartFailure = () => {
  return {
    type: "addtoCart/failure",
  };
};

const baseUrl = `http://localhost:8000`;

export const addtoCart = (data) => {
  return function (dispatch) {
    dispatch(addtoCartPending());
    axios
      .post(`${baseUrl}/addtocart`, data)
      .then((response) => {
        console.log(response);
        dispatch(addtoCartSuccess());
      })
      .catch((error) => {
        console.log(error);
        dispatch(addtoCartFailure());
      });
  };
};
