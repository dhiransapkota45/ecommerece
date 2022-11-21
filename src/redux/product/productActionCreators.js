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

export const getProduct = () => {
  return function (dispatch) {
    dispatch(productPending());
    axios
      .get(`${baseUrl}/allproduct`)
      .then((response) => {
        // console.log(response);
        dispatch(productSuccess(response.data.product));
      })
      .catch(() => dispatch(productFailure));
  };
};
