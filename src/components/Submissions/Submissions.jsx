/* eslint-disable react/no-array-index-key */
import React from "react";
import Accordion from "./Accordion/Accordion";
import "./Submissions.css";
import data from "./Data";

const Submissions = () => (
  <div
    id="sub"
    className="overflow-y-scroll h-80 mt-2 w-11/12 md:w-7/12 lg:w-7/12 xl:w-9/12"
  >
    <article>
      <div className="tabscontainer">
        {data.map((props) => (
          <Accordion
            key={props.id}
            id={props.id}
            title={props.question}
            content={props.answer}
          />
        ))}
      </div>
    </article>
  </div>
);

export default Submissions;
