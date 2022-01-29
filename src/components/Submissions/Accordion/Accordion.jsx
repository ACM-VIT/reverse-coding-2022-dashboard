import React, { useState, useRef } from "react";
// import Chevron from "./Chevron";

import "./Accordion.css";

const Accordion = (props) => {
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");
  const [setDisplay, setDisplayState] = useState("displayBorder");
  const [hideBorder, setHideBorder] = useState("accordion");
  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    );
    setDisplayState(
      setActive === "active" ? "displayBorder" : "accordion__content"
    );
    setHideBorder(setActive === "active" ? "accordion" : "accordion-active");
  }

  return (
    <div className="accordion__section z-0">
      <button
        type="button"
        className={`${hideBorder} ${setActive}`}
        onClick={toggleAccordion}
      >
        <div className={`accordion__title ${setActive}`}>{props.title}</div>
      </button>
      <div
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={`${setDisplay}`}
      >
        <div
          className="accordion__text "
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
};

export default Accordion;
