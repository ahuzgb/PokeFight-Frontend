import "../App.css";
import { Route, Routes, useParams, Link } from "react-router-dom";
import { useState } from "react";

function Fight({ pokedex }) {
  const { id } = useParams();
  const onePokemon = pokedex.find((pokemon) => pokemon.id === Number(id));

  const randomOpponent = pokedex[Math.floor(Math.random() * 809)];
  console.log(randomOpponent);
  console.log(onePokemon);

  const [opponent, setOpponent] = useState(randomOpponent);

  const fight = () => {
    setOpponent(randomOpponent);
    if (randomOpponent.base.Speed > onePokemon.base.Speed) {
      if (randomOpponent.base.Attack > onePokemon.base.HP) {
        return alert(`You lose against ${randomOpponent.name.english}!`);
      } else {
        return alert(`You win against ${randomOpponent.name.english}!`);
      }
    } else {
      if (randomOpponent.base.HP > onePokemon.base.Attack) {
        return alert(`You lose against ${randomOpponent.name.english}!`);
      } else {
        return alert(`You win against ${randomOpponent.name.english}!`);
      }
    }
  };

  return (
    <div className="Embark">
      <h1>Hi there!</h1>
      <p>A wild {randomOpponent?.name.english} appeared. </p>
      <h2>{onePokemon?.name.english}</h2>
      <button onClick={() => setOpponent(randomOpponent)}>Run</button>
      <button onClick={() => fight()}>Fight</button>
    </div>
  );
}

export default Fight;
