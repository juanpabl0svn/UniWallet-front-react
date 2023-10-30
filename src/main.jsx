import ReactDOM from "react-dom/client";
import "./services/firebase";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Context from "./context";

import Login from "./components/login/page";
import Template from "./templates/template";

import Main from "./components/main/page";
import Movements from "./components/movements/page";

import LoggedIn from "./routing/private-route-logged-in";
import Points from "./components/points/page";
import Loan from "./components/loan/page";

const router = createBrowserRouter([
  {
    path: "/main",
    element: (
      <LoggedIn>
        <Template />,
      </LoggedIn>
    ),
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "movements",
        element: <Movements />,
      },
      {
        path: "points",
        element: <Points />,
      },
      {
        path: "loan",
        element: <Loan />,
      },
    ],
  },
  {
    path: "/",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
