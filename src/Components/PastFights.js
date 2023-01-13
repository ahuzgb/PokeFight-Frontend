import "../App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function PastFights({ pokedex }) {
  const [fights, setFights] = useState([]);
  const [loading, setLoading] = useState(false);

  const getFights = () => {
    setLoading(true);

    setTimeout(
      () =>
        axios
          .get("http://localhost:8080/game/leaderboard")
          .then((res) => setFights(res.data.games.reverse()))
          .then(setLoading(false))
          .catch((e) => console.log(e)),
      2000
    );
  };

  useEffect(() => {
    getFights();
  }, []);

  console.log("Fights: " + fights);

  return (
    <div className="PastFights">
      <h2 id="scores-title">Scores</h2>
      {loading ? (
        <div className="loader_container">
          <div className="loader_spinner"></div>
        </div>
      ) : (
        <table className="score-table" style={{ border: "1px black" }}>
          <tr>
            <th>
              <h3>Winners</h3>
              <p>Good job, you guys.</p>
            </th>
            <th>
              <h3>Losers</h3>
              <p>Don't give up, friends.</p>
            </th>
          </tr>
          {fights.map((fight) => (
            <tr>
              <td className="winner-col">
                <div className="oneFight">
                  <p>{fight.winner}</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fight.winnerID}.png`}
                  />
                </div>
              </td>
              <td className="looser-col">
                <div className="oneFight">
                  <p>{fight.loser}</p>
                  <img
                    src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${fight.loserID}.png`}
                  />
                </div>
              </td>
            </tr>
          ))}
        </table>
      )}
    </div>
  );
}

export default PastFights;
