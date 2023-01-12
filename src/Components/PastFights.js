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
      <h1>Scores</h1>
      <div id="allFights">
        {fights.map((fight) => {
          return (
            <div className="oneFight">
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
    </div>
  );
}

export default PastFights;
