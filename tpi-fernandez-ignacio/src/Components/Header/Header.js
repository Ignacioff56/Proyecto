import { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import useSettings from "../hooks/useSettings";
import "./Header.css";

const Header = () => {
  const [appTheme, setAppTheme] = useSettings();
  const authStatus = useContext(AuthContext);
  return (
    <div className="Header">
      <h1>Venta de Objetos materiales</h1>
      <button
        onClick={() => {
          setAppTheme({
            theme: appTheme.theme === "dark" ? "light" : "dark",
          });
        }}>
        {appTheme.theme === "dark" ? "Claro" : "Oscuro"}
      </button>
      {authStatus.role === "Admin" && <h2>Modo Admin</h2>}
    </div>
  );
};

export default Header;
