import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState, useEffect } from "react";

function Results({ results }) {
  return (
    <div className="Results">
      {results?.map((result) => {
        return (
          <Link to={`/${result.id}`}>
            <div>
              <h2>{result.name.english}</h2>
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
