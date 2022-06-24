import { BrowserRouter } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./components/App";
import reducer from "./reducers";
import middleware from "./middleware";

import "./styles/index.css";

const store = configureStore({ reducer, middleware });

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
