import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPokemon from "./Components/AllPokemon";
import SinglePokemon from "./Components/SinglePokemon";
import Fight from "./Components/Fight";
import Filter from "./Components/Filter";
import PastFights from "./Components/PastFights";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:8080/pokemon";

  const [pokedex, setPokedex] = useState([]);
  const [fighter, setFighter] = useState(null);

  const getPokemon = () => {
    axios.get(url).then((res) => {
      console.log(res);
      setPokedex(res.data);
    });
  };

  useEffect(() => {
    getPokemon();
  }, []);

  console.log(pokedex);

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Filter pokedex={pokedex} />} />
        <Route path="/all" element={<AllPokemon pokedex={pokedex} />} />
        <Route path="/:id" element={<SinglePokemon pokedex={pokedex} />} />
        <Route path="/:id/fight" element={<Fight pokedex={pokedex} />} />
        <Route path="/pastfights" element={<PastFights />} />
      </Routes>
    </div>
  );
}

export default App;
