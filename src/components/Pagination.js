import React from 'react';
import { useLocation } from 'react-router-dom';

const Pagination = ({ page, prevPage, nextPage }) => {
  const location = useLocation();

  const isHomeRoute = location.pathname === "/";

  return isHomeRoute ? (
    <div>
      <button onClick={prevPage} disabled={page === 1}>Previous Page</button>
      <button onClick={nextPage}>Next Page</button>
    </div>
  ) : null;
};

export default Pagination;
