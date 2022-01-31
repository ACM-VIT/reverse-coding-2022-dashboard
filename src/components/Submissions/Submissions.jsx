/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "./Accordion/Accordion";

import "./Submissions.css";

const Submissions = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/969499df-f089-4638-8159-8cf4d822126b")
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
      className="overflow-y-scroll h-80 mt-2 w-11/12 md:w-7/12 lg:w-7/12 xl:w-9/12"
    >
      <article>
        <div className="tabscontainer">
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
