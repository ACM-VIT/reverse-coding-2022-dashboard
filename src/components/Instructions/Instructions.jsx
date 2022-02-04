import React from "react";
import data from "./Data";

import "./Instructions.css";

const Instructions = () => (
  <div>
    <article id="instructions" className="container">
      {data.map((ques) => (
        <>
          <div className="title">{ques.title}</div>
          <div className="content">{ques.content}</div>
        </>
      ))}
    </article>
  </div>
);

export default Instructions;
