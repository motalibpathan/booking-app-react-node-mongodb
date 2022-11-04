import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import { List } from "./pages/list/List";

const Main = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home /> },
      { path: "/hotels", element: <List /> },
      { path: "/hotels/:id", element: <Hotel /> },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
