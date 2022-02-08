/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import Accordion from "./Accordion/Accordion";

import "./Submissions.css";

const Submissions = () => {
  const submissions = useSelector((state) => state.postJudge.judgePoints);

  const arr = [];
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < submissions.length; i++) {
    arr.push(submissions[i].problem_name);
  }

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
              id={sub.problem_id}
              question={sub.problem_name}
              desc={sub.instructionsText}
              score={sub.points}
              num={arr.findIndex((x) => String(x) === sub.problem_name) + 1}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default Submissions;
