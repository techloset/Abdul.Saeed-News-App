import React from "react";
import ReactDOM from "react-dom/client";
// import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from "../src/store/store.tsx";
import App from "./App.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
