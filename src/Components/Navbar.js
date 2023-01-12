import "../App.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div className="Navbar">
      <h1>Pokemon Adventure</h1>
      <div id="navlinks">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all">Pokedex</NavLink>
        <NavLink to="/pastfights">Scores</NavLink>
      </div>
    </div>
  );
}

export default Navbar;
