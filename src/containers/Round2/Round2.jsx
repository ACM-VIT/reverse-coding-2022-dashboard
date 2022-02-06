import React, { useState } from "react";
import { useSelector } from "react-redux";
import Hard from "../../components/Wheels/Hard";
import Medium from "../../components/Wheels/Medium";
import Easy from "../../components/Wheels/Easy";

import "./Round2.css";

const Round2 = () => {
  const getQues = useSelector((state) => state.getAll.problems);

  // console.log(getQues.length);

  // const [color1, setColor1] = useState(false);
  // const [color2, setColor2] = useState(false);
  // const [color3, setColor3] = useState(false);
  // const [color4, setColor4] = useState(false);
  // const [color5, setColor5] = useState(false);
  // const [color6, setColor6] = useState(false);
  // const [color7, setColor7] = useState(false);
  // const [color8, setColor8] = useState(false);
  // const [color9, setColor9] = useState(false);
  // const [color10, setColor10] = useState(false);

  // if (getQues.length === 15) {
  //   setColor1(true);
  // }
  // const assignedQues = () => {
  //   if (getData.length === 1) {
  //     setColor1(true);
  //   }
  //   if (getData.length === 1) {
  //     setColor1(true);
  //   }
  //   if (getData.length === 1) {
  //     setColor1(true);
  //   }
  //   if (getData.length === 1) {
  //     setColor1(true);
  //   }
  // };

  return (
    <div className="ml-64 2xl:ml-80 3xl:ml-100 mt-24 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-10 text-white quesno font-robo text-xl ">
          {/* <div className={color1 ? "easyfill" : "easy"}>1</div> */}
          <div className="easy">1</div>
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
        {/* <div className="hidden">
          <Hard />
        </div> */}
      </div>
    </div>
  );
};

export default Round2;
