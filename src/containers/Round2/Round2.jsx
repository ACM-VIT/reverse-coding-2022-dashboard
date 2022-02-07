import React from "react";
import { useSelector } from "react-redux";
import Hard from "../../components/Wheels/Hard";
import Medium from "../../components/Wheels/Medium";
import Easy from "../../components/Wheels/Easy";

import "./Round2.css";

const Round2 = () => {
  const getQues = useSelector((state) => state.postJudge.getAssigned);

  console.log(getQues.length);

  return (
    <div className="ml-64 2xl:ml-80 3xl:ml-100 xl:mt-16 2xl:mt-32 ">
      <div className="flex justify-center">
        <div className="grid grid-cols-10 text-white quesno font-robo text-xl ">
          <div className={getQues[0] ? "easyfill" : "easy"}>1</div>
          <div className={getQues[1] ? "easyfill" : "easy"}>2</div>
          <div className={getQues[2] ? "easyfill" : "easy"}>3</div>
          <div className={getQues[3] ? "easyfill" : "easy"}>4</div>
          <div className={getQues[4] ? "easyfill" : "easy"}>5</div>
          <div className={getQues[5] ? "mediumfill" : "medium"}>6</div>
          <div className={getQues[6] ? "mediumfill" : "medium"}>7</div>
          <div className={getQues[7] ? "mediumfill" : "medium"}>8</div>
          <div className={getQues[8] ? "hardfill" : "hard"}>9</div>
          <div className={getQues[9] ? "hardfill" : "hard"}>10</div>
        </div>
      </div>
      <div className="font-robo text-white text-center text-xl 3xl:text-2xl mt-8 2xl:mt-12">
        Spin the wheel to get 10 questions alloted to your team.
        <br /> Question breakdown is 5 easy, 3 Medium and 2 hard.
      </div>
      <div className="flex justify-center mt-12">
        <div>
          <Easy />
          <div className={getQues.length <= 5 ? "" : "hidden"}>
            <Easy />
          </div>
          <div
            className={
              getQues.length > 5 && getQues.length <= 8 ? "" : "hidden"
            }
          >
            <Medium />
          </div>
          <div className={getQues.length > 8 ? "" : "hidden"}>
            <Hard />
          </div>
        </div>
        {/* <Easy />
        <Medium />
        <Hard /> */}
      </div>
    </div>
  );
};

export default Round2;
