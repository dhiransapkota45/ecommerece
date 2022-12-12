// // import axios from "axios";

import axios from "axios";

// // const instance = axios.create({
// //   baseURL: "http://localhost:8000",
// //   headers: {
// //     "Content-Type": "application/json",
// //     "authToken":
// //       sessionStorage.getItem("authToken") || localStorage.getItem("authToken"),
// //   },
// // });

// // export default instance;

// import axios from "axios";

// export const url = "http://localhost:8000";

// const instance = axios.create({
//   baseURL: url,
// });

// // Add a request interceptor
// instance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("authToken");

//     // problem: authentication failed is trying to solve
//     if (token) {
//       config.headers["authToken"] =
//         sessionStorage.getItem("authToken") ||
//         localStorage.getItem("authToken");
//       //   config.headers["Access-Control-Allow-Origin"] = "*";
//       //   config.headers["Access-Control-Allow-Credentials"] = "true";
//     }
//     config.headers["Content-Type"] = "application/json";
//     // console.log(config);
//     // config.headers["accept"] = "application/json";
//     return config;
//   },
//   (error) => {
//     console.log(error);
//     Promise.reject(error);
//   }
// );

// instance.interceptors.response.use(
//   (response) => {
//     return response;
//   },
//   async (error) => {
//     const refreshToken = localStorage.getItem("refreshToken");
//     const originalRequest = error.config;
//     if (error.response) {
//       if (
//         refreshToken?.refresh &&
//         error.response.status === 401 &&
//         // error.response.data.detail === "Token has expired" &&
//         !originalRequest._retry
//       ) {
//         originalRequest._retry = true;
//         try {
//           const response = await instance.post("/verifyrefresh", {
//             refreshToken: refreshToken,
//           });
//           const access_token = response.data.accessToken;
//           refreshToken.access = access_token;
//           let user = JSON.stringify(refreshToken);
//           localStorage.setItem("user", user);
//           return instance(originalRequest);
//         } catch (_error) {
//           return Promise.reject(_error);
//         }
//       } else {
//       }
//     }
//     return Promise.reject(error);
//   }
// );

// export default instance;

const API_URL = "http://localhost:8000";

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
            localStorage.setItem("accessToken", res.data.accessToken);
            // localStorage.setItem("refreshToken", res.data.refreshToken);

            originalRequest.headers["authToken"] = `${res.data.accessToken}`;

            return axios(originalRequest);
          }
        })
        .catch(() => {
          localStorage.clear();
          // window.location.reload();
        });
    }
    return Promise.reject(error.response || error.message);
  }
);

export default instance;
