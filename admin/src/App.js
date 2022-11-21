import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import List from "./pages/list/List";
import Login from "./pages/login/Login";
import New from "./pages/new/New";
import Single from "./pages/single/Single";

const Main = () => {
  return (
    <>
      <Outlet />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/login", element: <Login /> },
      {
        path: "/users",
        children: [
          { path: "/users", element: <List /> },
          { path: ":userId", element: <Single /> },
          { path: "new", element: <New /> },
        ],
      },
      {
        path: "/products",
        children: [
          { path: "/products", element: <List /> },
          { path: ":productId", element: <Single /> },
          { path: "new", element: <New /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
