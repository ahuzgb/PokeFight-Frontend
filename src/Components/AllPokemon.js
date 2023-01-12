import "../App.css";
import { Route, Routes, Link } from "react-router-dom";
import { useState } from "react";
import Pagination from "./Pagination";

function Pokedex({ pokedex }) {
  /* const [currentPage, setCurrentPage] = useState(1);
  const indexOfLastRecord = currentPage * 9;
  const indexOfFirstRecord = indexOfLastRecord - 9;
  const currentRecords = pokedex.slice(indexOfFirstRecord, indexOfLastRecord);
  const nPages = Math.ceil(pokedex.length / 9); */

  const [currentPage, setCurrentPage] = useState(1);
  const [articlesPerPage] = useState(9);

  const indexOfLastArticle = currentPage * articlesPerPage;
  const indexOfFirstArticle = indexOfLastArticle - articlesPerPage;
  const currentArticles = pokedex.slice(
    indexOfFirstArticle,
    indexOfLastArticle
  );

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="Pokedex">
      <div className="pokedex">
        {currentArticles?.map((pokemon) => (
          <Link to={`/${pokemon.id}`}>
            <div key={pokemon.id} className={`onePoke ${pokemon.type[0]}`}>
              <h3>
                #{pokemon.id} {pokemon.name.english}
              </h3>
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`}
              />
            </div>
          </Link>
        ))}
      </div>
      <Pagination
        /*         nPages={nPages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage} */
        articlesPerPage={articlesPerPage}
        totalArticles={pokedex.length}
        paginate={paginate}
      />
    </div>
  );
}

export default Pokedex;
