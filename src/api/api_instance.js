import axios from "axios";
const API_URL = "https://ecommerce-application-zkwo.onrender.com";

const instance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(
  (config) => {
    const accessToken =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (accessToken) {
      config.headers["authToken"] =
        sessionStorage.getItem("authToken") ||
        localStorage.getItem("authToken");
    }
    return config;
  },
  (error) => {
    Promise.reject(error.response || error.message);
  }
);

instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    let originalRequest = error.config;
    let refreshToken =
      sessionStorage.getItem("refreshToken") ||
      localStorage.getItem("refreshToken");
    if (
      refreshToken &&
      error.response.status === 401 &&
      !originalRequest._retry
    ) {
      originalRequest._retry = true;
      return axios
        .post(`${API_URL}/verifyrefresh`, {
          refreshToken: refreshToken,
        })
        .then((res) => {
          if (res.status === 200) {
            //here is problem if user want remember me then how to set localstorage or sessionstorage
            localStorage.setItem("authToken", res.data.accessToken);
            sessionStorage.setItem("authToken", res.data.accessToken);

            originalRequest.headers["authToken"] = `${res.data.accessToken}`;

            return axios(originalRequest);
          } else {
            console.log(res);
          }
        })
        .catch(() => {
          sessionStorage.clear();
          localStorage.clear();
          window.location.reload();
        });
    }
    return Promise.reject(error.response || error.message);
  }
);

export default instance;
