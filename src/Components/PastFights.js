import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function PastFights() {
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
          <p>
            Winner: {fight.winner} <br /> Loser: {fight.loser}
          </p>
        );
      })}
    </div>
  );
}

export default PastFights;
