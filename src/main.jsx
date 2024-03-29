import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ErrorComponent from "./components/ErrorComponent";
import Home from "./components/Home";
import Statistics from "./components/Statistics";
import AppliedJobs from "./components/AppliedJobs";
import Blog from "./components/Blog";
import Details from "./components/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorComponent></ErrorComponent>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/featuredJob.json"),
      },
      {
        path:"details/:id",
        element:<Details></Details>,
        loader:()=> fetch(`/featuredJob.json`)
      },
      {
        path: "statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "appliedJobs",
        element: <AppliedJobs></AppliedJobs>,
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
