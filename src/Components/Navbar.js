import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/all">Pokedex</NavLink>
      <NavLink to="/pastfights">Pastfights</NavLink>
    </div>
  );
}

export default Navbar;
