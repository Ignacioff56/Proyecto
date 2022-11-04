import { useContext } from "react";
import { AuthDispatchContext } from "../Context/AuthDispatchContext";

const LogoutButton = () => {
  const authStatus = useContext(AuthDispatchContext);
  return (
    <button
      className="Button"
      onClick={() => {
        // cambiar context auth
        authStatus({ name: "Guest", role: "Guest" });
        // cambiar localstorate
      }}>
      Cerrar sessión
    </button>
  );
};

export default LogoutButton;
