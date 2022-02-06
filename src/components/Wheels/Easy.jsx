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
  { option: "3" },
  { option: "1" },
  { option: "5" },
  { option: "10" },
  { option: "2" },
  { option: "7" },
  { option: "8" },
  { option: "9" },
  { option: "4" },
  { option: "6" },
  { option: "11" },
  { option: "12" },
  { option: "13" },
  { option: "14" },
  { option: "15" },
  { option: "16" },
  { option: "17" },
  { option: "18" },
  { option: "19" },
  { option: "20" },
  { option: "21" },
  { option: "22" },
  { option: "23" },
  { option: "24" },
  { option: "25" },
  { option: "26" },
];

const backgroundColors = ["#000000", "#006900"];
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

const Easy = () => {
  const dispatch = useDispatch();

  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [prizeSelected, setPrizeSelected] = useState("0");
  const getData = useSelector((state) => state.getAll.problems);
  // const getAsssignedQues = useSelector((state) => state.postjudge.getAssigned);
  const getDisable = useSelector((state) => state.postJudge.disable);
  const easyARR = getData.slice(0, 7);
  // const medARR = getData.slice(7, 11);
  // const hardARR = getData.slice(11, 15);

  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleSpinClick = () => {
    const newPrizeNumber = Math.floor(Math.random() * 11);

    const selectedQues = Number(data[newPrizeNumber].option);
    console.log("abccc", Number(selectedQues));
    const easyID = easyARR[selectedQues].id;
    // getAsssignedQues.map((quesid) => {
    //   if (quesid.id === easyID) {
    //   }
    // });
    // console.log(easyID);
    // dispatch(postRoullete(easyID));
    setPrizeSelected(selectedQues);
    setPrizeNumber(selectedQues);

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

export default memo(Easy);
