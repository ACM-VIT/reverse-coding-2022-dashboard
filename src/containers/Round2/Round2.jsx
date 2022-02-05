import React from "react";
import Hard from "../../components/Wheels/Hard";
import Medium from "../../components/Wheels/Medium";
import Easy from "../../components/Wheels/Easy";

import "./Round2.css";

const Round2 = () => {
  console.log("abc");
  return (
    <div className="ml-64 2xl:ml-80 3xl:ml-100 mt-24 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-10 text-white quesno font-robo text-xl ">
          <div className="easy ">1</div>
          <div className="easy">2</div>
          <div className="easy">3</div>
          <div className="easy">4</div>
          <div className="easy">5</div>
          <div className="medium">6</div>
          <div className="medium">7</div>
          <div className="medium">8</div>
          <div className="hard">9</div>
          <div className="hard">10</div>
        </div>
      </div>
      <div className="flex justify-center mt-16">
        <Easy />
        <div className="hidden">
          <Medium />
        </div>
        <div className="hidden">
          <Hard />
        </div>
      </div>
    </div>
  );
};

export default Round2;
