import axios from "axios";

const loginPending = () => {
  return {
    type: "login/pending",
  };
};

const loginSuccess = (data) => {
  return {
    type: "login/success",
    payload: data,
  };
};

const loginFailure = (error) => {
  return {
    type: "login/failure",
    payload: error,
  };
};

export const emptyerror = () => {
  return{
    type:"login/error"
  }
}

const baseUrl = `http://localhost:8000`;

export const loginUser = (data) => {
  return function (dispatch) {
    dispatch(loginPending());
    axios
      .post(`${baseUrl}/login`, data)
      .then((response) => {
        dispatch(
          loginSuccess({
            authToken: response.data.authToken,
            checkbox: response.data.checkbox,
          })
        );
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        dispatch(loginFailure(error.response.data.msg));
      });
  };
};
