import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import "./index.css";
import { Router } from "./routes/routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ToastProvider>
      <RouterProvider router={Router}></RouterProvider>
    </ToastProvider>
  </React.StrictMode>
);
