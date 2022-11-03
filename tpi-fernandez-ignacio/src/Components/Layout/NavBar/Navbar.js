import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import LogoutButton from "../../Logout/Logout";
import "./NavBar.css";

const Navbar = () => {
  const Navigate = useNavigate();
  const authStatus = useContext(AuthContext);

  return (
    <div className="NavBar">
      <h3>Navegacion</h3>
      {authStatus.role === "Guest" ? <button onClick={() => Navigate("/Login")}>Login</button> : <LogoutButton />}

      <button onClick={() => Navigate("/Articles")}>Articulus</button>
    </div>
  );
};

export default Navbar;
