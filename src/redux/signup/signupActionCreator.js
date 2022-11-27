import axios from "axios";

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

const baseUrl = `http://localhost:8000`;

export const signupUser = (data, checkbox, navigate) => {
  return function (dispatch) {
    dispatch(signupPending());
    axios
      .post(`${baseUrl}/signup`, data)
      .then((response) => {
        if (checkbox) {
          localStorage.setItem("authToken", response.data.authToken);
          navigate("/account");
        } else {
          sessionStorage.setItem("authToken", response.data.authToken);
          navigate("/account");
        }
        dispatch(
          signupSuccess()
        );
      })
      .catch((error) => {
        console.log(error.response.data.msg);
        dispatch(signupFailure(error.response.data.msg));
      });
  };
};
