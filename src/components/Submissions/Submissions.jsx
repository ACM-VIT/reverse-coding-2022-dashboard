/* eslint-disable react/no-array-index-key */
import React from "react";
import Accordion from "./Accordion/Accordion";
import "./Submissions.css";
import data from "./Data";

const Submissions = () => (
  <article id="faqs" className="faqcontainer">
    <div className="tabscontainer">
      {data.map((ques) => (
        <Accordion
          key={ques.id}
          id={ques.id}
          title={ques.question}
          content={ques.answer}
        />
      ))}
    </div>
  </article>
);

export default Submissions;
