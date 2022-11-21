import { useRef } from "react";
import "react-loading-skeleton/dist/skeleton.css";
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
  useNavigation,
} from "react-router-dom";
import LoadingBar from "react-top-loading-bar";
import Home from "./pages/home/Home";
import Hotel from "./pages/hotel/Hotel";
import { List } from "./pages/list/List";
import Login from "./pages/login/Login";

const Main = () => {
  const navigation = useNavigation();
  const ref = useRef();
  if (ref && navigation.state === "loading") {
    ref.current.continuousStart();
  }
  if (ref && navigation.state === "idle") {
    ref?.current?.complete();
  }
  return (
    <div>
      <LoadingBar color="#f11946" ref={ref} />
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
      {
        path: "/hotels/:id",
        loader: ({ params }) => fetch(`/api/hotels/find/${params.id}`),
        element: <Hotel />,
      },
      { path: "/login", element: <Login /> },
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
