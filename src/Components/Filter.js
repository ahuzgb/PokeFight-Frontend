import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Results from "./Results";

function Filter({ pokedex }) {
  const [results, setResults] = useState([]);
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");
  const [currentType, setCurrentType] = useState("All types");
  const [currentGeneration, setCurrentGeneration] = useState("All generations");

  const resetResults = () => setResults([]);

  const types = [
    "All types",
    "Normal",
    "Psychic",
    "Bug",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Fighting",
    "Steel",
    "Dragon",
    "Ghost",
    "Ice",
    "Poison",
    "Ground",
    "Flying",
    "Fairy",
    "Dark",
    "Rock",
  ];

  const generations = [
    "All generations",
    "Generation I",
    "Generation II",
    "Generation III",
    "Generation IV",
    "Generation V",
    "Generation VI",
    "Generation VII",
  ];

  const genI = [pokedex.slice(0, 150)];
  const genII = [pokedex.slice(151, 250)];
  const genIII = [pokedex.slice(251, 386)];
  const genIV = [pokedex.slice(387, 492)];
  const genV = [pokedex.slice(493, 648)];
  const genVI = [pokedex.slice(649, 720)];
  const genVII = [pokedex.slice(721, 809)];

  const searchHandler = (e, query) => {
    e.preventDefault();
    const lowerCase = query.toLowerCase();
    console.log(lowerCase);
    /*     const filter = pokedex.filter((pokemon) => {
      //    if (query === "") {
      //
      //   } else
      if (
        currentType === "All types"
        //     currentGeneration === "All generations"
      ) {
        return pokemon.name.english.toLowerCase().includes(lowerCase);
      } else {
        return (
          pokemon.name.english.toLowerCase().includes(lowerCase) &&
          pokemon.type.includes(currentType)
        );
      }
    }); */

    const filterOne = pokedex.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(lowerCase)
    );

    console.log("Filter One", filterOne);

    if (filterOne.length === 0) {
      return alert("No match");
    } else {
      const filterTwo = filterOne.filter((pokemon) =>
        pokemon.type.some((type) => currentType === type)
      );
      return setResults(filterTwo);
    }

    /*     const filter = pokedex.filter((pokemon) =>
      pokemon.name.english.toLowerCase().includes(lowerCase)
    );

    if (filter.length === 0) {
      return alert("No match");
    } else if (currentType === "All types") {
      console.log(filter);
    } else {
      filter.filter((pokemon) => pokemon.type.includes(currentType));
    }

    setResults(filter);

    if (filter.length === 0) return alert("No match"); */
  };

  console.log(results);

  return (
    <div className="Filter">
      <h1>Pokemon Arena</h1>
      {results.length === 0 ? (
        <div>
          <form
            onSubmit={(e) => {
              searchHandler(e, query);
            }}
          >
            <input
              type="text"
              value={inputText}
              onChange={(e) => {
                setInputText(e.target.value);
                return setQuery(e.target.value);
              }}
            />
            {types.map((type) => {
              return (
                <div>
                  <p>{type}</p>
                  <input
                    type="radio"
                    name={type}
                    id={type}
                    value={type}
                    checked={currentType === type ? true : false}
                    onChange={(e) => {
                      setCurrentType(e.target.value);
                      console.log(currentType);
                    }}
                  />
                </div>
              );
            })}
            {generations.map((gen) => {
              return (
                <div>
                  <p>{gen}</p>
                  <input
                    type="radio"
                    name={gen}
                    id={gen}
                    value={gen}
                    checked={currentGeneration === gen ? true : false}
                    onChange={(e) => {
                      setCurrentGeneration(e.target.value);
                      console.log(currentGeneration);
                    }}
                  />
                </div>
              );
            })}
            <button type="submit">Search</button>
          </form>{" "}
        </div>
      ) : (
        <div>
          <button onClick={() => resetResults()}>Back to search</button>
          <Results results={results} />
          <button onClick={() => resetResults()}>Back to search</button>
        </div>
      )}
    </div>
  );
}

export default Filter;