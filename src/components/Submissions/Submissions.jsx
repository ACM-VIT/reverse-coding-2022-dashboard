/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion/Accordion";

import "./Submissions.css";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/14e66659-cc6d-45d5-a1a0-2ca05f1ebea2")
      .then((res) => {
        setSubmissions(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div
      id="sub"
      className="overflow-y-scroll h-80 2xl:h-100 mt-4 2xl:mt-8 w-9/12 2xl:w-10/12"
    >
      <article>
        <div className="mr-5">
          {submissions.map((sub) => (
            <Accordion
              key={sub.id}
              id={sub.id}
              title={sub.question}
              content={sub.description}
              score={sub.score}
            />
          ))}
        </div>
      </article>
    </div>
  );
};

export default Submissions;
