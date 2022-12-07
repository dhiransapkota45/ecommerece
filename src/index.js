import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import store from "./redux/store";
import { Provider } from "react-redux";
import CartCount from "./context/cartcount";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <CartCount>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </CartCount>
  </React.StrictMode>
);
