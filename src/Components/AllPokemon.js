import "../App.css";
import { Route, Routes, Link } from "react-router-dom";

function Pokedex({ pokedex }) {
  return (
    <div className="Pokedex">
      {pokedex?.map((pokemon) => (
        <Link to={`/${pokemon.id}`}>
          <div key={pokemon.id}>
            <h3>{pokemon.name.english}</h3>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
            />
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Pokedex;
