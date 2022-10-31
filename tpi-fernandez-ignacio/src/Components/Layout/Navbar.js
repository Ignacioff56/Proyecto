import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const Navigate = useNavigate();
  return (
    <div className="NavBar">
      <p>Navegacion</p>
      <button onClick={() => Navigate("/Login")}>Login</button>
      <button onClick={() => Navigate("/Articles")}>Articulus</button>
      {console.log("navbar")}
    </div>
  );
};

export default Navbar;
