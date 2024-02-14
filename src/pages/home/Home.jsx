import reactLogo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div className="flex flex-col items-center justify-center w-100">
        <a href="#">
          <img
            src={reactLogo}
            className="w-64 h-64 animate-pulse hover:animate-spin"
            alt="React logo"
          />
        </a>
        <h1 className="text-3xl font-bold">My First React</h1>
        <div className="flex flex-wrap gap-2 m-5">
          <Button color="warning" pill onClick={() => navigate("signup")}>
            SIGN UP
          </Button>
          <Button color="success" pill onClick={() => navigate("signin")}>
            SIGN IN
          </Button>
        </div>
        <Button onClick={() => navigate("todo")}>TO-DO</Button>
      </div>
    </>
  );
}

export default Home;
