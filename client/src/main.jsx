import React from "react";
import ReactDOM from "react-dom/client";
import "./styles.css";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import {
  postLoader,
  postsLoader,
  todosLoader,
  userLoader,
  usersLoader,
} from "./loaders";
import { Users, User, Posts, Post, ErrorPage, Todos } from "./pages";
import AppLayout from "./AppLayout";

const router = createBrowserRouter([
  {
    path: "*",
    element: <Navigate to="/" />,
  },
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "todos",
        element: <Todos />,
        loader: todosLoader,
      },
      {
        path: "posts",
        children: [
          {
            index: true,
            element: <Posts />,
            loader: postsLoader,
          },

          {
            path: ":id",
            element: <Post />,
            loader: postLoader,
          },
        ],
      },
      {
        path: "users",
        children: [
          {
            index: true,
            element: <Users />,
            loader: usersLoader,
          },
          {
            path: ":id",
            element: <User />,
            loader: userLoader,
          },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
