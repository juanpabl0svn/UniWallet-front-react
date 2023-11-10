import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context";
import { useEffect } from "react";
import { hasASession } from "../services/localStorage";
import { getUserData } from "../services/firebase";

const LoggedIn = ({ children }) => {
  const navigate = useNavigate();
  const { setUserData, userData } = useUserContext();

  useEffect(() => {
    const isLoggedInUser = hasASession();

    if (!isLoggedInUser) {
      navigate("/");
    } else {
      getUserData(isLoggedInUser)
        .then((value) => {
          console.log(value)
          setUserData(value)})
        .catch((err) => console.log(err));
    }
  }, []);

  return userData === undefined ? null : children;
};

export default LoggedIn;
