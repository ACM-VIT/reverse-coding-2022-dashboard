/* eslint-disable react/function-component-definition */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Ide from "./ide";
import Modals from "../Modals/Modals";
import linux from "../../assets/images/linux.svg";
import mac from "../../assets/images/mac.svg";
import windows from "../../assets/images/windows.svg";
import download from "../../assets/images/download.svg";
import upload from "../../assets/images/upload.svg";
import { getLaunch } from "../../redux/QuestionsLaunch/questionsLaunchActions";
import "./Ques.css";

const Ques = ({ person }) => {
  const [active, setActive] = useState({
    windowsImage: true,
    linuxImage: false,
    macImage: false,
  });

  const [open, setOpen] = useState(false);
  const [filename, setFilename] = useState("");
  const [disable, setDisable] = useState(true);
  console.log(open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFilename("");
  };
  const handlechangefile = (e) => {
    if (e.target.files[0]) {
      if (e.target.files[0].name.split(".")[1].match(/^(java|js|go|py)$/)) {
        if (e.target.files[0].size > 47185920) {
          setDisable(true);
          console.log("file size is too big");
          setFilename("");
        } else {
          setDisable(false);
          setFilename(e.target.files[0].name);
        }
      } else {
        setDisable(true);
        console.log("file type not supported");
        setFilename("");
      }
    } else {
      setDisable(true);
      setFilename("");
    }
  };

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.questionsLaunch.launchState);
  console.log(getData);
  return (
    <div>
      <div
        className="ques mx-auto "
        style={{ display: getData ? "none" : "block" }}
      >
        <div className="flex flex-col gap-7 ">
          <div className="px-8 py-8 bg-color box-radius">{person.id}</div>
          <div className="flex flex-row gap-7 sec-height">
            <div className="px-5 py-5 bg-color relative test-case box-radius">
              <div
                style={{
                  color:
                    person.name === "ACCEPTED"
                      ? "rgba(39, 174, 96, 1)"
                      : person.name === "WRONG"
                      ? "rgba(235, 87, 87, 1)"
                      : "rgba(242, 201, 76, 1)",
                }}
              >
                {person.name}
              </div>
              <div className="flex absolute bottom-0 mb-4 2xl:mb-6">
                <div>
                  <div
                    className="upload-btn text-white flex"
                    onClick={handleOpen}
                  >
                    Upload
                    <img
                      className="ml-2 h-6 2xl:h-7 2xl:ml-4"
                      src={upload}
                      alt="upload"
                    />
                  </div>
                  <Modals
                    open={open}
                    onClose={handleClose}
                    onchange={handlechangefile}
                    filename={filename}
                    btndis={disable}
                  />
                </div>

                <div className=" ml-8 2xl:ml-20 text-white font-700 text-lg 2xl:text-2xl">
                  Points: <br />
                  25/100{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 ">
              <div className="bg-color  exec box-radius ">
                <div className="pl-6 pt-6 pr-16">
                  To solve the question on your PC, download the executable file
                  accordinng to your OS.
                </div>
                <div className="download-container mt-6 mx-auto">
                  <span
                    onClick={() => {
                      setActive({
                        windowsImage: true,
                        linuxImage: false,
                        macImage: false,
                      });
                    }}
                  >
                    <img
                      src={windows}
                      alt="windows"
                      className="icon h-5 2xl:h-7"
                      style={{
                        cursor: "pointer",
                        marginLeft: "24px",
                        opacity: active.windowsImage ? "1" : "0.5",
                      }}
                    />
                  </span>
                  <span
                    onClick={() => {
                      setActive({
                        windowsImage: false,
                        linuxImage: true,
                        macImage: false,
                      });
                    }}
                  >
                    <img
                      src={linux}
                      alt="linux"
                      className="icon h-5 2xl:h-7"
                      style={{
                        cursor: "pointer",
                        opacity: active.linuxImage ? "1" : "0.5",
                      }}
                    />
                  </span>
                  <span
                    onClick={() => {
                      setActive({
                        windowsImage: false,
                        linuxImage: false,
                        macImage: true,
                      });
                    }}
                  >
                    <img
                      src={mac}
                      alt="mac"
                      className="icon h-5 2xl:h-7"
                      style={{
                        cursor: "pointer",
                        opacity: active.macImage ? "1" : "0.5",
                      }}
                    />
                  </span>
                  <span
                    onClick={() => {
                      setActive({
                        windowsImage: true,
                        linuxImage: false,
                        macImage: false,
                      });
                    }}
                    className="icon download"
                    style={{
                      marginRight: "0",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      cursor: "pointer",
                      // opacity: active. ? "1" : "0.5",
                    }}
                  >
                    <img
                      className="h-5 2xl:h-7"
                      src={download}
                      alt="download"
                    />
                  </span>
                </div>
              </div>
              <div className="text-center text-2xl 2xl:text-3xl">OR</div>
              <div className="bg-color exec  box-radius">
                <div className="pl-6 pt-6">
                  Try with your own custom I/O online
                </div>
                <div className="launch-btn text-white mt-12 2xl:mt-20 mx-auto flex">
                  <span
                    onClick={() => {
                      dispatch(getLaunch(true));
                    }}
                  >
                    Launch
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: getData ? "block" : "none" }}>
        <Ide name={person.name} id={person.id} />
      </div>
    </div>
  );
};

export default Ques;
