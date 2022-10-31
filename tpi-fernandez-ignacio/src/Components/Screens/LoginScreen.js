import { useState } from "react";
import { login } from "../Services/AuthApi";
import { useNavigate } from "react-router-dom";

const LoginScreen = ({}) => {
  const [password, setPassword] = useState("");
  const Navigate = useNavigate();
  return (
    <div className="LoginScreen">
      <h1>Login para Administradores</h1>
      <h2>Ingrese la Clave: </h2>
      <label for="password">Contraseña</label>
      <input id="password" type="password" value={password} onChange={(event) => setPassword(event.target.value)} />
      <button
        onClick={() => {
          login(password)
            .then((user) => {
              console.log("login correcto", user);
              Navigate("/");
            })
            .catch((err) => {
              alert(err);
            });
        }}>
        Ingresar
      </button>
    </div>
  );
};

export default LoginScreen;
