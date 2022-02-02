/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/jsx-key */
/* eslint-disable no-plusplus */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import Ques from "../../../components/Questions/Ques";
import Pages from "../../../components/Pagination/Pages";
import nextarrow from "../../../assets/images/nextarrow.svg";
import prevarrow from "../../../assets/images/prevarrow.svg";

function Questions() {
  const getData = useSelector((state) => state.postTeam.people);
  console.log(getData);

  const [currentPage, setcurrentPage] = useState(1);
  const [itemsPerPage, setitemsPerPage] = useState(1);

  const [pageNumberLimit, setPageNumberLimit] = useState(8);
  const [maxpageNumberLimit, setMaxPageNumberLimit] = useState(8);
  const [minpageNumberLimit, setMinPageNumberLimit] = useState(0);

  const pages = [];
  for (let i = 1; i <= Math.ceil(getData.length / itemsPerPage); i++) {
    pages.push(i);
  }
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = getData.slice(indexOfFirstItem, indexOfLastItem);
  console.log(currentItems);
  const handleClick = (e) => {
    setcurrentPage(Number(e.target.id));
  };
  const handleNext = () => {
    setcurrentPage(currentPage + 1);
    if (currentPage + 1 > maxpageNumberLimit) {
      setMaxPageNumberLimit(maxpageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minpageNumberLimit + pageNumberLimit);
    }
  };
  const handlePrev = () => {
    setcurrentPage(currentPage - 1);
    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxpageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minpageNumberLimit - pageNumberLimit);
    }
  };
  let pageIncrementBtn = null;
  if (pages.length > maxpageNumberLimit) {
    pageIncrementBtn = (
      <li onClick={handleNext} className="mx-1">
        &hellip;
      </li>
    );
  }
  let pageDecrementBtn = null;
  if (minpageNumberLimit >= 1) {
    pageDecrementBtn = (
      <li onClick={handlePrev} className="mx-1">
        &hellip;
      </li>
    );
  }
  return (
    <div>
      <div className="flex justify-center mb-8 mt-24">
        <ul className="pageNumbersquestion justify-end pb-1 text-white">
          <li className="mx-1">
            <button onClick={handlePrev} disabled={currentPage === pages[0]}>
              <img src={prevarrow} alt="prev" />
            </button>
          </li>
          {pageDecrementBtn}
          <Pages
            pages={pages}
            currentPage={currentPage}
            setcurrentPage={setcurrentPage}
            onclick={handleClick}
            pageNumberLimit={pageNumberLimit}
            setPageNumberLimit={setPageNumberLimit}
            maxpageNumberLimit={maxpageNumberLimit}
            minpageNumberLimit={minpageNumberLimit}
          />
          {pageIncrementBtn}
          <li className="mx-1">
            <button
              onClick={handleNext}
              disabled={currentPage === pages[pages.length - 1]}
            >
              <img src={nextarrow} alt="next" />
            </button>
          </li>
        </ul>
      </div>
      {currentItems.map((person) => (
        <Ques person={person} />
      ))}
    </div>
  );
}

export default Questions;
