// import axios from "axios";
import instance from "../../api/api_instance";

const signupPending = () => {
  return {
    type: "signup/pending",
  };
};

const signupSuccess = () => {
  return {
    type: "signup/success",
  };
};

const signupFailure = (error) => {
  return {
    type: "signup/failure",
    payload: error,
  };
};

export const signupUser = (data, checkbox, navigate) => {
  return function (dispatch) {
    dispatch(signupPending());
    instance
      .post(`/signup`, data)
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
        dispatch(signupSuccess());
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        dispatch(signupFailure(error.response.data.msg));
      });
  };
};
