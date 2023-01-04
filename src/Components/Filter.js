import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";

function Filter({ pokedex }) {
  const [result, setResult] = useState([]);
  const [inputText, setInputText] = useState("");
  const [query, setQuery] = useState("");

  const searchHandler = (e, query) => {
    e.preventDefault();
    const lowerCase = query.toLowerCase();
    console.log(lowerCase);
    const filter = pokedex.filter((pokemon) => {
      if (query === "") {
        return alert("What are you looking for?");
      } else {
        return pokemon.name.english.toLowerCase().includes(lowerCase);
      }
    });
    setResult(filter);
  };

  console.log(result);

  return (
    <div className="Filter">
      <h1>Hey!</h1>
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
        <button type="submit">Search</button>
      </form>{" "}
    </div>
  );
}

export default Filter;
