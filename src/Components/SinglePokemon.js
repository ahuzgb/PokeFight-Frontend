import "../App.css";
import { Route, Routes, useParams, Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function PokeInfo({ pokedex, setFighter, fighter }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const onePokemon = pokedex.find((pokemon) => pokemon.id === Number(id));

  return (
    <div className={`SinglePokemon`}>
      <div id="singlePokemon">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${onePokemon?.id}.png`}
        />
        <div id="imgstats">
          <h1>{onePokemon?.name.english}</h1>
          <h2>#{onePokemon?.id} </h2>
          <div className="types">
            {onePokemon?.type.map((type) => (
              <div id={`${type}`} className="typetag">
                <p>{type}</p>
              </div>
            ))}{" "}
          </div>
          <div id="stats">
            <p>
              Attack: <b>{onePokemon?.base.Attack}</b>
            </p>
            <p>
              Defense <b>{onePokemon?.base.Defense}</b>
            </p>
            <p>
              HP: <b>{onePokemon?.base.HP}</b>
            </p>
            <p>
              Sp. Attack: <b>{onePokemon?.base["Sp. Attack"]}</b>
            </p>
            <p>
              Sp. Defense: <b>{onePokemon?.base["Sp. Defense"]}</b>
            </p>
            <p>
              Speed: <b>{onePokemon?.base.Speed}</b>
            </p>
          </div>
        </div>
      </div>
      <div className="singlePokeButton">
        {" "}
        {onePokemon?.id === 1 ? (
          <div></div>
        ) : (
          <button onClick={() => navigate(`/${onePokemon?.id - 1}`)}>
            prev
          </button>
        )}
        <Link to={`/${onePokemon?.id}/fight`}>
          <button
            onClick={() => {
              setFighter(onePokemon);
              return console.log(fighter);
            }}
          >
            <b>Choose Pokémon</b>
          </button>
        </Link>
        {onePokemon?.id === 809 ? (
          <div></div>
        ) : (
          <button onClick={() => navigate(`/${onePokemon?.id + 1}`)}>
            next
          </button>
        )}
      </div>
    </div>
  );
}

export default PokeInfo;
