import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { PersistGate } from "redux-persist/integration/react";
import "./index.css";
import { persistor, store } from "./redux/store";
import { Router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ToastProvider>
          <RouterProvider router={Router}></RouterProvider>
        </ToastProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
