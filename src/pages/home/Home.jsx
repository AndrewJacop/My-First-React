import reactLogo from "../../assets/react.svg";
import { useNavigate } from "react-router-dom";
import { Button } from "flowbite-react";
import { useContext } from "react";
import { userContext } from "../../contexts/user";
import { signMeOut } from "../../services/firebase/auth";

function Home() {
  const navigate = useNavigate();
  const { user, setUser } = useContext(userContext);

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
          {!user.token ? (
            <>
              <Button color="warning" pill onClick={() => navigate("signup")}>
                SIGN UP
              </Button>
              <Button color="success" pill onClick={() => navigate("signin")}>
                SIGN IN
              </Button>
            </>
          ) : (
            <>
              <Button
                color="failure"
                pill
                onClick={() => {
                  setUser({});
                  signMeOut();
                }}
              >
                SIGN OUT
              </Button>
            </>
          )}
        </div>
        {/* <Button onClick={() => navigate("todo")}>TO-DO</Button> */}
      </div>
    </>
  );
}

export default Home;
