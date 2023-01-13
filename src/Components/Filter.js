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
    "All",
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

  /*  const generations = [
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
  const genVII = [pokedex.slice(721, 809)]; */

  const searchHandler = (e, query) => {
    e.preventDefault();
    const lowerCase = query.toLowerCase();
    console.log(lowerCase);
    const filter = pokedex.filter((pokemon) => {
      if (currentType === "All") {
        return pokemon.name.english.toLowerCase().includes(lowerCase);
      } else {
        return (
          pokemon.name.english.toLowerCase().includes(lowerCase) &&
          pokemon.type.includes(currentType)
        );
      }
    });

    setResults(filter);
    setInputText("");
    setCurrentType("All");
    if (filter.length === 0) return alert("No match");
  };

  console.log(results);

  return (
    <div className="Filter">
      {results.length === 0 ? (
        <div>
          <form
            onSubmit={(e) => {
              searchHandler(e, query);
            }}
          >
            <div className="center">
              <input
                type="text"
                name="text"
                class="input"
                placeholder="Search!"
                value={inputText}
                onChange={(e) => {
                  setInputText(e.target.value);
                  return setQuery(e.target.value);
                }}
              ></input>
            </div>

            <div id="typesearch">
              {types.map((type) => {
                return (
                  <div className="typeselect">
                    <label>
                      <div className="p-style " id={`${type}`}>
                        <p>{type}</p>
                      </div>
                      <input
                        className="chcecked"
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
                    </label>
                  </div>
                );
              })}{" "}
            </div>
            {/*      {generations.map((gen) => {
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
            })} */}
            <button className="search-btn" type="submit">
              <span>Search</span>
            </button>
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
