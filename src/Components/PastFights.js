import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function PastFights({ pokedex }) {
  const [fights, setFights] = useState([]);

  const getFights = () => {
    axios
      .get("http://localhost:8080/game/leaderboard")
      .then((res) => setFights(res.data.games.reverse()))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getFights();
  }, []);

  console.log("Fights: " + fights);

  return (
    <div className="PastFights">
      <h1>Past Fights</h1>
      {fights.map((fight) => {
        return (
          <div>
            <p>Winner: {fight.winner}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fight.winnerID}.png`}
            />
            <p>Loser: {fight.loser}</p>
            <img
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fight.loserID}.png`}
            />
          </div>
        );
      })}
    </div>
  );
}

export default PastFights;
