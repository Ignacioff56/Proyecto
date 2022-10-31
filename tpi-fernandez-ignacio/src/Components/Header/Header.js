import useSettings from "../hooks/useSettings";
import "./Header.css";

const Header = () => {
  const [appTheme, setAppTheme] = useSettings();
  return (
    <div className="Header">
      <h1>Venta de Aberturas</h1>
      <button
        onClick={() => {
          setAppTheme({
            theme: appTheme.theme === "dark" ? "light" : "dark",
          });
        }}>
        {appTheme.theme === "dark" ? "Claro" : "Oscuro"}
      </button>
    </div>
  );
};

export default Header;
