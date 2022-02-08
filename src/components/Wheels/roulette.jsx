/* eslint-disable import/no-named-as-default */
/* eslint-disable  no-nested-ternary */

import React, { useEffect, useState, memo } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Wheels.css";

import { Wheel } from "react-custom-roulette";
import {
  postRoullete,
  setDisable,
} from "../../redux/PostJudge/postJudgeActions";

import ModalRoulette from "../Modals/ModalRoulette";

const mapper = {
  easy: [
    { option: "0", style: { backgroundColor: "#006900" } },
    { option: "3" },
    { option: "8" },
    { option: "1" },
    { option: "5" },
    { option: "9" },
    { option: "2" },
    { option: "7" },
    { option: "4" },
    { option: "6" },
    { option: "3" },
    { option: "8" },
    { option: "1" },
    { option: "5" },
    { option: "9" },
    { option: "2" },
    { option: "7" },
    { option: "4" },
    { option: "6" },
  ],
  medium: [
    { option: "0", style: { backgroundColor: "#006900" } },
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
  ],
  hard: [
    { option: "0", style: { backgroundColor: "#006900" } },
    { option: "1" },
    { option: "2" },
    { option: "4" },
    { option: "3" },
    { option: "1" },
    { option: "2" },
    { option: "4" },
    { option: "3" },
    { option: "1" },
    { option: "2" },
    { option: "4" },
    { option: "3" },
    { option: "1" },
    { option: "2" },
    { option: "4" },
    { option: "3" },
  ],
};

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

const Roulette = () => {
  const dispatch = useDispatch();

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeSelected, setPrizeSelected] = useState("0");
  const getData = useSelector((state) => state.getAll.problems);
  // const getAsssignedQues = useSelector((state) => state.postjudge.getAssigned);
  const getDisable = useSelector((state) => state.postJudge.disable);
  const getQues = useSelector((state) => state.postJudge.getAssigned);

  const easyARR = getData.slice(0, 10);
  const medARR = getData.slice(10, 16);
  const hardARR = getData.slice(16, 21);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const quesArr =
    getQues.length <= 5
      ? easyARR
      : getQues.length > 5 && getQues.length <= 8
      ? medARR
      : hardARR;

  const dataArr =
    getQues.length <= 5
      ? mapper.easy
      : getQues.length > 5 && getQues.length <= 8
      ? mapper.medium
      : mapper.hard;

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * dataArr.length);
    console.log(newPrizeNumber);
    const selectedQues = Number(dataArr[newPrizeNumber].option);
    console.log("abccc", Number(selectedQues));
    const quesID = quesArr[selectedQues].id;
    setPrizeSelected(selectedQues);
    setPrizeNumber(newPrizeNumber);
    dispatch(postRoullete(quesID));
    setMustSpin(true);
    dispatch(setDisable(true));

    if (getQues.length >= 10) {
      setMustSpin(false);
    }
    console.log(quesArr);
  };

  return (
    <div className="">
      <header className="">
        <div>
          <Wheel
            mustStartSpinning={mustSpin}
            prizeNumber={prizeNumber}
            data={dataArr}
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
            className="w-24"
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

export default Roulette;
