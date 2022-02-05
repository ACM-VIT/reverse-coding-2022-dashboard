/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Accordion from "./Accordion/Accordion";

import "./Submissions.css";

const Submissions = () => {
  const submissions = useSelector((state) => state.getAll.judgePoints);
  // console.log(submissions);

  return (
    <div
      id="sub"
      className="overflow-y-auto min-h-fit max-h-80 2xl:max-h-100 mt-4 2xl:mt-8 w-9/12 2xl:w-10/12"
    >
      <article>
        <div className="mr-5">
          {submissions.map((sub) => (
            <Accordion
              key={sub.problem_id}
              id={sub.prblem_id}
              question={sub.problem_name}
              desc={sub.instructionsText}
              score={sub.points}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default Submissions;
