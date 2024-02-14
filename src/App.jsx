import { Routes, Route } from "react-router-dom";
import Home from "./components/home/Home";
import SignIn from "./components/signIn/SignIn";
import SignUp from "./components/signUp/SignUp";
import ToDo from "./components/toDo/ToDo";
import { Flowbite } from "flowbite-react";
import NavBar from "./components/navBar/NavBar";
import SideBar from "./components/sideBar/SideBar";

const App = () => {
  return (
    <>
      <Flowbite>
        <NavBar />
        <main>
          <SideBar />
          <section>
            <Routes className="flex content-center justify-center w-full">
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/todo" element={<ToDo />} />
            </Routes>
          </section>
        </main>
      </Flowbite>
    </>
  );
};

export default App;
