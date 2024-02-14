import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home/Home";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import BareLayout from "./layouts/BareLayout";
import MainLayout from "./layouts/MainLayout";
import Movies from "./pages/movies/Movies";
import Details from "./pages/movies/Details";
import Search from "./pages/movies/Search";
import Favourites from "./pages/movies/Favourites";
import NotFound from "./layouts/NotFound";
import ToDo from "./pages/toDo/ToDo";

// eslint-disable-next-line no-unused-vars
export const routesList = createBrowserRouter([
  {
    path: "/",
    element: <BareLayout />,
    children: [
      { path: "signin", element: <SignIn /> },
      { path: "signup", element: <SignUp /> },
      {
        element: <MainLayout />,
        children: [
          { index: true, element: <Home /> },
          { path: "movies", element: <Movies /> },
          { path: "details/:id", element: <Details /> },
          { path: "search", element: <Search /> },
          { path: "fav", element: <Favourites /> },
          { path: "todo", element: <ToDo /> },
        ],
      },
    ],
  },
  { path: "*", element: <NotFound /> },
]);
