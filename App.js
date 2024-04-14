import React from "react";
import ReactDOM from "react-dom/client";
import Form from "./src/components/Form";
import { Outlet, createBrowserRouter, RouterProvider } from "react-router-dom";
import Post from "./src/components/Post";
import Error from "./src/components/Error";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import Home from "./src/components/Header";
import Header from "./src/components/Header";
import User from "./src/components/User";

const queryClint = new QueryClient();

const AppLayout = () => {
  return (
    <div>
      <Header></Header>
      <Outlet></Outlet>
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <QueryClientProvider client={queryClint}>
        <AppLayout></AppLayout>
        {/* <ReactQueryDevtools></ReactQueryDevtools> */}
      </QueryClientProvider>
    ),
    children: [
      {
        path: "/addUser",
        element: <Form></Form>,
      },
      {
        path: "/getUser",
        element: <Post></Post>,
      },
      {
        path: "/user",
        element: <User></User>,
      },
    ],
    errorElement: <Error></Error>,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
