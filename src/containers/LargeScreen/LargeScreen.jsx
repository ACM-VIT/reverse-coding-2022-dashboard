/* eslint-disable arrow-body-style */
import React from "react";

import "../../App.css";
import largeOverlay from "../../assets/images/LargeOverlay.svg";

const largeScreen = () => {
  return (
    <div className="w-full h-full flex justify-center items-center largescreen">
      <img
        className="mb-8 px-12"
        src={largeOverlay}
        alt="Please use a larger screen"
      />
    </div>
  );
};

export default largeScreen;
