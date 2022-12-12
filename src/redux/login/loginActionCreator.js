import axios from "axios";

const loginPending = () => {
  return {
    type: "login/pending",
  };
};

const loginSuccess = () => {
  return {
    type: "login/success",
  };
};

const loginFailure = (error) => {
  return {
    type: "login/failure",
    payload: error,
  };
};

export const emptyerror = () => {
  return {
    type: "login/error",
  };
};

const baseUrl = `http://localhost:8000`;

export const loginUser = (data, checkbox, navigate) => {
  return function (dispatch) {
    dispatch(loginPending());
    axios
      .post(`${baseUrl}/login`, data)
      .then((response) => {
        console.log(response);
        if (checkbox) {
          localStorage.setItem("authToken", response.data.authToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
          navigate("/account");
        } else {
          sessionStorage.setItem("refreshToken", response.data.refreshToken);
          sessionStorage.setItem("authToken", response.data.authToken);
          navigate("/account");
        }
        window.location.reload();
        dispatch(loginSuccess());
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        dispatch(loginFailure(error.response.data.msg));
      });
  };
};
