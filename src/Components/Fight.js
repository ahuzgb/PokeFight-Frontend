import "../App.css";
import { Route, Routes, useParams, Link } from "react-router-dom";
import { useState } from "react";

function Fight({ pokedex }) {
  const { id } = useParams();
  const onePokemon = pokedex.find((pokemon) => pokemon.id === Number(id));

  const randomOpponent = pokedex[Math.floor(Math.random() * 809)];
  console.log(randomOpponent);
  console.log(onePokemon);

  const [opponent, setOpponent] = useState(pokedex[0]);

  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");

  const game = { winner, loser };

  const fight = () => {
    console.log("Winner: " + winner, "Loser: " + loser);

    setOpponent(randomOpponent);
    if (randomOpponent.base.Speed > onePokemon.base.Speed) {
      if (randomOpponent.base.Attack > onePokemon.base.HP) {
        setWinner(opponent.name.english);
        setLoser(onePokemon.name.english);
        alert(`You lose against ${randomOpponent.name.english}!`);
      } else {
        setWinner(onePokemon.name.english);
        setLoser(opponent.name.english);
        alert(`You win against ${randomOpponent.name.english}!`);
      }
    } else {
      if (randomOpponent.base.HP > onePokemon.base.Attack) {
        setWinner(opponent.name.english);
        setLoser(onePokemon.name.english);
        alert(`You lose against ${randomOpponent.name.english}!`);
      } else {
        setWinner(onePokemon.name.english);
        setLoser(opponent.name.english);
        alert(`You win against ${randomOpponent.name.english}!`);
      }
    }

    fetch("http://localhost:8080/game/save", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        winner: winner,
        loser: loser,
      }),
    });
  };

  return (
    <div className="Embark">
      <h1>Fight!</h1>
      <p>A wild {randomOpponent?.name.english} appeared. </p>
      <h2>{onePokemon?.name.english}</h2>
      <button onClick={() => setOpponent(randomOpponent)}>Run</button>
      <button onClick={() => fight()}>Fight</button>
    </div>
  );
}

export default Fight;
