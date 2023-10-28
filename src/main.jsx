import ReactDOM from "react-dom/client";

import "./index.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Context from "./context";

import Login from "./components/login/page";
import Template from "./templates/template";

import Main from "./components/main/page";

const router = createBrowserRouter([
  {
    path: "/main",
    element: <Template />,
    children: [
      {
        path: "",
        element: <Main />,
      },
    ],
  },
  {
    path: '/',
    element: <Login />,
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Context>
    <RouterProvider router={router} />
  </Context>
);
