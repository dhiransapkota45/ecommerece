import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
    "authToken":
      sessionStorage.getItem("authToken") || localStorage.getItem("authToken"),
  },
});

export default instance;

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
//     console.log(config);
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
//           const response = await instance.post("users/token/refresh/", {
//             refresh: refreshToken.refresh,
//           });
//           const access_token = response.data.access;
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
