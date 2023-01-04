import "./App.css";
import { Route, Routes } from "react-router-dom";
import AllPokemon from "./Components/AllPokemon";
import SinglePokemon from "./Components/SinglePokemon";
import Filter from "./Components/Filter";
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
        <Route path="/" element={<Filter pokedex={pokedex} />} />
        <Route path="/all" element={<AllPokemon pokedex={pokedex} />} />
        <Route path="/:id" element={<SinglePokemon pokedex={pokedex} />} />
      </Routes>
    </div>
  );
}

export default App;
