import "../App.css";
import { NavLink } from "react-router-dom";
import React, { useState } from "react";
// import "./Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="Navbar">
      <span className="nav-logo">
        <h1>Pokemon Adventure</h1>
      </span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/all">Pokedex</NavLink>
        <NavLink to="/pastfights">Scores</NavLink>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>
  );
}

export default Navbar;

// <div className="Navbar">
//   <h1>Pokemon Adventure</h1>
//   <div id="navlinks">
//     <NavLink to="/">Home</NavLink>
//     <NavLink to="/all">Pokedex</NavLink>
//     <NavLink to="/pastfights">Scores</NavLink>
//   </div>
// </div>
//   );
// }

// export default Navbar;
