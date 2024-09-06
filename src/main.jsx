import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";

import AuthProvider from "./components/authProvider/AuthProvider";
import Checkout from "./components/checkout/Checkout";
import ErrorPage from "./components/errorPage/ErrorPage";
import MainLayout from "./mainLayout/MainLayout";
import Login from "./pages/login/Login";
import ProductPage from "./pages/productPage/ProductPage";
import Signup from "./pages/signup/Signup";

const isLogin = false;

const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/root",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/root",
        element: <ProductPage />,
      },
      {
        path: "/root/checkout",
        element: <Checkout />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
