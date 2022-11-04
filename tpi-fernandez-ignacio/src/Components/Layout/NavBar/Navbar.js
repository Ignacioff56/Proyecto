import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import LogoutButton from "../../Interface/Logout";
import "./NavBar.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const authStatus = useContext(AuthContext);

  return (
    <div className="NavBar">
      <h3>Navegacion</h3>
      {authStatus.role === "Guest" ? (
        <button className="Button" onClick={() => Navigate("/Login")}>
          Login
        </button>
      ) : (
        <LogoutButton />
      )}

      <button className="Button" onClick={() => Navigate("/Articles")}>
        Catalogo
      </button>
    </div>
  );
};

export default Navbar;
