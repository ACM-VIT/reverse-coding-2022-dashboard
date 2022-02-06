import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./Wheels.css";

import { Wheel } from "react-custom-roulette";
import {
  postRoullete,
  setDisable,
} from "../../redux/PostJudge/postJudgeActions";

import ModalRoulette from "../Modals/ModalRoulette";

const data = [
  { option: "0", style: { backgroundColor: "#0000AE" } },
  { option: "5" },
  { option: "2" },
  { option: "1" },
  { option: "4" },
  { option: "3" },
  { option: "4" },
  { option: "3" },
  { option: "2" },
  { option: "1" },
  { option: "5" },
  { option: "2" },
  { option: "5" },
  { option: "1" },
  { option: "4" },
  { option: "3" },
  { option: "4" },
  { option: "3" },
  { option: "2" },
  { option: "1" },
  { option: "5" },
];

const backgroundColors = ["#000000", "#eb7811"];
const textColors = ["white"];
const outerBorderColor = "#1a1717";
const outerBorderWidth = 9;
const innerBorderColor = "#1a1717";
const innerBorderWidth = 17;
const innerRadius = 40;
const radiusLineColor = "#e3caa8";
const radiusLineWidth = 3;
const fontSize = 20;
const textDistance = 86;

const Medium = () => {
  const dispatch = useDispatch();

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeSelected, setPrizeSelected] = useState("0");
  const getDisable = useSelector((state) => state.postJudge.disable);
  const getData = useSelector((state) => state.getAll.problems);
  const medARR = getData.slice(10, 16);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSpinClick = () => {
    // The Wheel component will call this function when spin is clicked
    // The next line will set the prize number to a random number between 0 and end of data array(which will be no. of questions)
    // You can then access the question number(option name) through indexing(newPrizeNumber is the index value).
    const newPrizeNumber = Math.floor(Math.random() * data.length);
    const selectedQues = Number(data[newPrizeNumber].option);
    const mediumID = medARR[selectedQues].id;
    console.log("abccc", selectedQues);
    console.log(mediumID);

    setPrizeSelected(selectedQues);
    setPrizeNumber(newPrizeNumber);
    dispatch(postRoullete(mediumID));
    setMustSpin(true);
    dispatch(setDisable(true));
  };

  return (
    <div className="">
      <header className="">
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={data}
            backgroundColors={backgroundColors}
            textColors={textColors}
            fontSize={fontSize}
            outerBorderColor={outerBorderColor}
            outerBorderWidth={outerBorderWidth}
            innerRadius={innerRadius}
            innerBorderColor={innerBorderColor}
            innerBorderWidth={innerBorderWidth}
            radiusLineColor={radiusLineColor}
            radiusLineWidth={radiusLineWidth}
            perpendicularText
            textDistance={textDistance}
            onStopSpinning={() => {
              setMustSpin(false);
              dispatch(setDisable(false));
              handleOpen();
            }}
          />
          <ModalRoulette
            open={open}
            onClose={handleClose}
            problemNo={prizeSelected}
          />
        </div>
        <div
          className={
            getDisable
              ? "spin-btn font-robo text-2xl mx-auto mt-16 disabled pointer-events-none opacity-50"
              : "spin-btn font-robo text-2xl mx-auto mt-16"
          }
          onClick={handleSpinClick}
        >
          SPIN
        </div>
      </header>
    </div>
  );
};

export default memo(Medium);
