import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import About from "../pages/About";
import Home from "../pages/Home";
import SignIn from "../pages/signin/SignIn";
import SignUp from "../pages/signup/SignUp";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
    ],
  },
  {
    path: "about",
    element: <About></About>,
  },
  {
    path: "signIn",
    element: <SignIn></SignIn>,
  },
  {
    path: "signUp",
    element: <SignUp></SignUp>,
  },
]);
