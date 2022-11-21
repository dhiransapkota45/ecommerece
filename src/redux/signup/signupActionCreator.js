import axios from "axios";

const signupPending = () => {
  return {
    type: "signup/pending",
  };
};

const signupSuccess = (data) => {
  return {
    type: "signup/success",
    payload: data,
  };
};

const signupFailure = (error) => {
  return {
    type: "signup/failure",
    payload: error,
  };
};

const baseUrl = `http://localhost:8000`;

export const signupUser = (data) => {
  console.log(data);
  return function (dispatch) {
    dispatch(signupPending());
    axios
      .post(`${baseUrl}/signup`, data)
      .then((response) => {
        console.log(response);
        dispatch(
          signupSuccess({
            authToken: response.data.authToken,
            checkbox: response.data.checkbox,
          })
        );
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        dispatch(signupFailure(error.response.data.msg));
      });
  };
};
