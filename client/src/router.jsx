import { createBrowserRouter, Navigate } from "react-router-dom";
import AppLayout from "./AppLayout";
import { ErrorPage, Post, Posts, Todos, User, Users } from "./pages";
import {
  postLoader,
  postsLoader,
  todosLoader,
  userLoader,
  usersLoader,
} from "./loaders";

export const router = createBrowserRouter([
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
