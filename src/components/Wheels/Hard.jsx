import React, { useEffect, useState, memo } from "react";
import "./Wheels.css";

import { Wheel } from "react-custom-roulette";
import { useSelector, useDispatch } from "react-redux";
import ModalRoulette from "../Modals/ModalRoulette";
import {
  postRoullete,
  setDisable,
} from "../../redux/PostJudge/postJudgeActions";
const data = [
  { option: "0", style: { backgroundColor: "#006900" } },
  { option: "1" },
  { option: "2" },
  { option: "4" },
  { option: "2" },
  { option: "1" },
  { option: "3" },
  { option: "4" },
  { option: "3" },
  { option: "1" },
  { option: "2" },
  { option: "4" },
  { option: "2" },
  { option: "1" },
  { option: "3" },
  { option: "4" },
  { option: "3" },
  { option: "1" },
  { option: "2" },
  { option: "4" },
  { option: "2" },
  { option: "1" },
  { option: "3" },
  { option: "4" },
  { option: "3" },
];

const backgroundColors = ["#000000", "#df3428"];
const textColors = ["white"];
const outerBorderColor = "#1a1717";
const outerBorderWidth = 9;
const innerBorderColor = "#1a1717";
const innerBorderWidth = 17;
const innerRadius = 40;
const radiusLineColor = "#d8a35a";
const radiusLineWidth = 3;
const fontSize = 20;
const textDistance = 86;

const Hard = () => {
  const dispatch = useDispatch();
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeSelected, setPrizeSelected] = useState("0");
  const getDisable = useSelector((state) => state.postJudge.disable);
  const getData = useSelector((state) => state.getAll.problems);
  // const easyARR = getData.slice(0, 7);
  // const medARR = getData.slice(7, 11);
  const hardARR = getData.slice(16, 21);
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
    console.log(newPrizeNumber);
    const selectedQues = Number(data[newPrizeNumber].option);
    console.log("abccc", selectedQues);
    const hardID = hardARR[selectedQues].id;
    console.log(hardID);
    setPrizeSelected(selectedQues);
    setPrizeNumber(newPrizeNumber);
    dispatch(postRoullete(hardID));
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

export default memo(Hard);
