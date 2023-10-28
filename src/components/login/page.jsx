import React from "react";
import './login.css'

const Login = () => {
  return (
    <main className="login">
      <aside>
        <form>
          <div>
            <input type="text" name="username" id="username" />
            <label htmlFor="username">Usuario</label>
          </div>
          <div>
            <input type="text" name="password" id="password" />
            <label htmlFor="password">Contraseña</label>
          </div>
          <div className="actions">
            <a href="#">¿Olvidaste tu contrasña?</a>
            <input type="button" value="Ingresar" />
          </div>
        </form>
      </aside>
    </main>
  );
};

export default Login;
