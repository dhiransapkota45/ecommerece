import axios from "axios";

const productPending = () => {
  return {
    type: "product/pending",
  };
};

const productSuccess = (product) => {
  return {
    type: "product/success",
    payload: product,
  };
};

const productFailure = () => {
  return {
    type: "product/failure",
  };
};
const baseUrl = `http://localhost:8000`;

export const getProduct = (filterValue) => {
  Object.keys(filterValue).forEach((key) => {
    if (filterValue[key] === "all") {
      delete filterValue[key];
    }
  });

  return function (dispatch) {
    dispatch(productPending());
    axios
      .post(`${baseUrl}/allproduct`, filterValue)
      .then((response) => {
        console.log(response);
        dispatch(productSuccess(response.data.product));
      })
      .catch(() => dispatch(productFailure));
  };
};
