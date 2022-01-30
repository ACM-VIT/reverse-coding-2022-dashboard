import React from "react";
import Accordion from "./Accordion/Accordion";
import "./Faq.css";
import data from "./Data";

const faqSection = () => (
  <article id="faq" className="faqcontainer">
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

export default faqSection;
