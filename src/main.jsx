import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./index.css";
import { Router } from "./routes/routes";
import { Provider } from "react-redux";
import { store } from "./redux/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastProvider>
        <RouterProvider router={Router}></RouterProvider>
      </ToastProvider>
    </Provider>
  </React.StrictMode>
);
