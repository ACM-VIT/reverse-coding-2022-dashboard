/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import "./Pages.css";

function Pages({
  pages,
  onclick,
  currentPage,
  pageNumberLimit,
  maxpageNumberLimit,
  minpageNumberLimit,
}) {
  return (
    <>
      {pages.map((page) =>
        page < maxpageNumberLimit + 1 && page > minpageNumberLimit ? (
          <li
            key={page}
            id={page}
            onClick={onclick}
            className={currentPage === page ? "active mx-1" : " mx-1"}
          >
            {page}
          </li>
        ) : null
      )}
    </>
  );
}

export default Pages;
