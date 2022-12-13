// import axios from "axios";
import instance from "../../api/api_instance";

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
  console.log(filterValue);
  let dataforbackend = filterValue;
  Object.keys(dataforbackend).forEach((key) => {
    if (dataforbackend[key] === "all") {
      delete dataforbackend[key];
    }
  });

  return function (dispatch) {
    dispatch(productPending());
    instance
      .post(`${baseUrl}/allproduct`, dataforbackend)
      .then((response) => {
        console.log(response);
        dispatch(productSuccess(response.data.product));
      })
      .catch(() => dispatch(productFailure));
  };
};
