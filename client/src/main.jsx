import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Posts from "./pages/Posts";
import Post from "./pages/Post";
import { postsLoader } from "./loaders";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/posts",
        element: <Posts />,
        loader: postsLoader,
      },
      {
        path: "/posts/:id",
        element: <Post />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
