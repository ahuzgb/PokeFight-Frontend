import "./App.css";
import { Route, Routes } from "react-router-dom";
import Pokedex from "./Pokedex";
import PokeInfo from "./PokeInfo";
import PokeStats from "./PokeStats";
import axios from "axios";
import { useState, useEffect } from "react";

function App() {
  const url = "http://localhost:8080/pokemon";

  const [pokedex, setPokedex] = useState([]);

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
        <Route path="/" element={<Pokedex pokedex={pokedex} />} />
        <Route path="/:id" element={<PokeInfo />} />
        <Route path="/:id/:info" element={<PokeStats />} />
      </Routes>
    </div>
  );
}

export default App;
