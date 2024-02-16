// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import SignIn from "./pages/auth/SignIn";
// import SignUp from "./pages/auth/SignUp";
// import ToDo from "./pages/toDo/ToDo";
// import { Flowbite } from "flowbite-react";
// import NavBar from "./components/navBar/NavBar";
// import SideBar from "./components/sideBar/SideBar";

import { RouterProvider } from "react-router-dom";
import { routesList } from "./App.Routes";
import { Provider } from "react-redux";
import store from "./redux/store";

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={routesList} />;
    </Provider>
  );
};

export default App;
