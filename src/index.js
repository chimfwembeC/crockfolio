import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from "./App";
import Layout from "./layout/Layout";
import ThemeProviderComponent from "./layout/ThemeContext";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Welcome from "./Welcome"; // Ensure you have a Home component
import Skill from "./Skills/Skill";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { path: "/", element: <Welcome /> },
      { path: "/skills", element: <Skill /> },
      // Add more routes as needed
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProviderComponent>
      <RouterProvider router={router} />
    </ThemeProviderComponent>
  </React.StrictMode>
);
