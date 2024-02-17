import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { userContext } from "../contexts/user";
import { Toast } from "flowbite-react";
import { toast } from "react-hot-toast";

const ProtectedRoute = ({ children }) => {
  const { user, setUser } = useContext(userContext);

  if (user.token) {
    return children;
  } else {
    toast.error("you have to log in first!");
    return (
      <Navigate to="/signIn">
        <Toast />
      </Navigate>
    );
  }
};

export default ProtectedRoute;
