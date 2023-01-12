import "../App.css";
import { Route, Routes, useParams, Link } from "react-router-dom";
import { useState } from "react";

function PokeInfo({ pokedex, setFighter, fighter }) {
  const { id } = useParams();

  const onePokemon = pokedex.find((pokemon) => pokemon.id === Number(id));

  return (
    <div className={`SinglePokemon`}>
      <h1>{onePokemon?.name.english}</h1>
      <p>#{onePokemon?.id}</p>
      <div className="types">
        {onePokemon?.type.map((type) => (
          <div id={`${type}`} className="typetag">
            <p>{type}</p>
          </div>
        ))}{" "}
      </div>
      <div id="imgstats">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${onePokemon?.id}.png`}
        />
        <div id="stats">
          <p>Attack: {onePokemon?.base.Attack}</p>
          <p>Defense {onePokemon?.base.Defense}</p>
          <p>HP: {onePokemon?.base.HP}</p>
          <p>Sp. Attack: {onePokemon?.base["Sp. Attack"]}</p>
          <p>Sp. Defense: {onePokemon?.base["Sp. Defense"]}</p>
          <p>Speed: {onePokemon?.base.Speed}</p>
        </div>
      </div>
      <Link to={`/${onePokemon?.id}/fight`}>
        <button
          onClick={() => {
            setFighter(onePokemon);
            return console.log(fighter);
          }}
        >
          Choose Pokémon
        </button>
      </Link>
    </div>
  );
}

export default PokeInfo;
