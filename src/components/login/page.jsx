import React, { useRef, useEffect } from "react";
import "./login.css";
import { useUserContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { hasASession } from "../../services/localStorage";

const Login = () => {
  const username = useRef();
  const password = useRef();
  const navigate = useNavigate();

  const { userData, setUserData } = useUserContext();

  useEffect(() => {
    const isLoggedInUser = hasASession(setUserData);

    if (isLoggedInUser) {
      navigate("/main");
    }
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    setUserData({
      name: "juan pablo",
      username: username.current.value,
      password: password.current.value,
      currency: 2000,
      points: 300,
      movements: [],
    });

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
              type="password"
              name="password"
              id="password"
              ref={password}
              required
            />

            <label htmlFor="password"> Contraseña </label>
          </div>
          <a href="/signin">¿Olvidaste tu Contraseña?</a>
          <input type="submit" value="Ingresar" />
        </form>
      </article>
    </main>
  ) : null;
};

export default Login;
