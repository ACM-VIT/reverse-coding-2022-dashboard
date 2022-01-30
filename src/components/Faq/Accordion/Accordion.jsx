import React, { useState, useRef, useEffect } from "react";

import "./Accordion.css";

import { FiPlus } from "react-icons/fi";

const accordion = (props) => {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    contentRef.current.style.maxHeight = active
      ? `${contentRef.current.scrollHeight}px`
      : "0px";
  }, [contentRef, active]);

  const toggleAccordion = () => {
    setActive(!active);
  };

  return (
    <div>
      <button
        type="button"
        className={`question-section ${active} divider`}
        onClick={toggleAccordion}
      >
        <div>
          <div className="question-title">
            {props.title}
            <FiPlus className={active ? `answer-icon` : `question-icon`} />
          </div>
          <div
            ref={contentRef}
            className={active ? `answer` : `answer`}
            dangerouslySetInnerHTML={{ __html: props.content }}
          />
        </div>
      </button>
    </div>
  );
};

export default accordion;
