import React, { useRef, useEffect } from "react";
import "./login.css";
import { useUserContext } from "../../context";
import { useNavigate } from "react-router-dom";
import { hasASession } from "../../services/localStorage";
import { loginFirebase } from "../../services/firebase";



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

  async function handleSubmit(e) {
    e.preventDefault();


    const user = await loginFirebase(username.current.value,password.current.value)

    if (user == null){
      console.log('something went wrong')
      return 
    }
    setUserData(user)
  

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
