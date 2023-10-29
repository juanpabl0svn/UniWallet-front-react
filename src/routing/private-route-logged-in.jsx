import { useNavigate } from "react-router-dom";
import { useUserContext } from "../context";
import { useEffect } from "react";
import { hasASession } from "../services/localStorage";

const LoggedIn = ({ children }) => {
  const navigate = useNavigate();
  const { setUserData, userData } = useUserContext();

  useEffect(() => {
    const isLoggedInUser = hasASession(setUserData);

    if (!isLoggedInUser) {
      navigate("/");
    }
  }, []);

  return userData === undefined ? null : children;
};

export default LoggedIn;
