import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Results({ results }) {
  return (
    <div className="Results pokedex">
      {results?.map((result) => {
        return (
          <Link to={`/${result.id}`}>
            <div className={`onePoke ${result.type[0]}`}>
              <h2>
                #{result.id} {result.name.english}
              </h2>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.id}.png`}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
}

export default Results;
