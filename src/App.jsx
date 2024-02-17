// import { Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import SignIn from "./pages/auth/SignIn";
// import SignUp from "./pages/auth/SignUp";
// import ToDo from "./pages/toDo/ToDo";
// import { Flowbite } from "flowbite-react";
// import NavBar from "./components/navBar/NavBar";
// import SideBar from "./components/sideBar/SideBar";

import { RouterProvider } from "react-router-dom";
import { router } from "./utils/App.Routes";
import { Provider } from "react-redux";
import store from "./services/redux/store";
import { UserProvider } from "./contexts/user";
import { useState } from "react";

const App = () => {
  const currentUserName = localStorage.getItem("username");
  const currentUserState = localStorage.getItem("isLoggedIn");
  const [user, setUser] = useState({
    name: currentUserName ? currentUserName : "User",
    isLoggedIn: currentUserState ? currentUserState : false,
  });
  return (
    <UserProvider value={{ user, setUser }}>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </UserProvider>
  );
};

export default App;
