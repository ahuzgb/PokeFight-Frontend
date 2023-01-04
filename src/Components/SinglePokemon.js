import "../App.css";
import { Route, Routes, useParams } from "react-router-dom";

function PokeInfo({ pokedex }) {
  const { id } = useParams();

  const onePokemon = pokedex.find((pokemon) => pokemon.id === Number(id));

  console.log(pokedex);
  console.log(onePokemon);
  console.log("Hey!");

  return (
    <div className="SinglePokemon">
      <h1>{onePokemon?.name.english}</h1>
      <p>#{onePokemon?.id}</p>
      {onePokemon?.type.map((type) => (
        <p>{type}</p>
      ))}
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${onePokemon?.id}.png`}
      />
      <p>Attack: {onePokemon?.base.Attack}</p>
      <p>Defense {onePokemon?.base.Defense}</p>
      <p>HP: {onePokemon?.base.HP}</p>
      <p>Sp. Attack: {onePokemon?.base["Sp. Attack"]}</p>
      <p>Sp. Defense: {onePokemon?.base["Sp. Defense"]}</p>
      <p>Speed {onePokemon?.base.Speed}</p>
    </div>
  );
}

export default PokeInfo;
