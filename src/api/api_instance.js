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
