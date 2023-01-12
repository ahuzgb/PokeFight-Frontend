import "../App.css";

export default function Pagination({
  articlesPerPage,
  totalArticles,
  paginate,
}) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalArticles / articlesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination-container">
        {pageNumbers.map((number) => (
          <li key={number} className="pagination-item">
            <a
              onClick={() => paginate(number)}
              href="#"
              className="pagination-link"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/* import ReactPaginate from "react-paginate";
import { useState } from "react";

function Pagination(props) {
  const pageNumbers = [...Array(props.nPages + 1).keys()].slice(1);
  const nextPage = () => {
    if (props.currentPage !== props.nPages)
      props.setCurrentPage(props.currentPage + 1);
  };
  const prevPage = () => {
    if (props.currentPage !== 1) props.setCurrentPage(props.currentPage - 1);
  };

  return (
    <div className="Pagination">
      <a onClick={prevPage}>Previous</a>
      {pageNumbers.map((pageNumber) => {
        <li>
          <a onClick={() => props.setCurrentPage(pageNumber)}>{pageNumber}</a>
        </li>;
      })}
      <li>
        <a onClick={nextPage}>Next</a>
      </li>
    </div>
  );
}

export default Pagination;
 */
