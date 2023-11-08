import React, { useRef, useEffect, useState } from "react";
import "./login.css";
import { useUserContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { hasASession } from "../../services/localStorage";
import { getUser } from "../../services/firebase";

import Swal from "sweetalert2";

import EyeOpen from "./components/eye-open";
import EyeClose from "./components/eye-close";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const { userData, setUserData } = useUserContext();

  const [seePassword, setSeePassword] = useState(false);

  useEffect(() => {
    const isLoggedInUser = hasASession(setUserData);

    if (isLoggedInUser) {
      navigate("/main");
    }
  }, []);

  const handleClick = () => setSeePassword((lastValue) => !lastValue);

  async function handleSubmit(e) {
    e.preventDefault();

    const user = await getUser(
      username.current.value,
      password.current.value
    ).catch(err => null)

    if (user == null) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Username or password are not correct",
      });

      password.current.value = "";
      return;
    }
    setUserData(user);

    navigate("/main");
  }

  return userData == undefined ? (
    <main className="login">
      <article className="card">
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              id="username"
              ref={username}
              required
            />
            <label htmlFor="username">Usuario</label>
          </div>
          <div>
            <input
              type={seePassword ? "text" : "password"}
              name="password"
              id="password"
              ref={password}
              required
            />

            <label htmlFor="password"> Contraseña </label>
            {seePassword ? (
              <EyeClose handle={handleClick} />
            ) : (
              <EyeOpen handle={handleClick} />
            )}
          </div>
          <a href="/signin">¿Olvidaste tu Contraseña?</a>
          <input type="submit" value="Ingresar" />
        </form>
      </article>
    </main>
  ) : null;
};

export default Login;
