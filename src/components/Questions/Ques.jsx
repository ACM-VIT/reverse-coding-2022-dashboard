/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Ide from "./ide";
import linux from "../../assets/images/linux.svg";
import mac from "../../assets/images/mac.svg";
import windows from "../../assets/images/windows.svg";
import download from "../../assets/images/download.svg";
import upload from "../../assets/images/upload.svg";
import { getLaunch } from "../../redux/QuestionsLaunch/questionsLaunchActions";
import "./Ques.css";

const Questions = () => {
  const [active, setActive] = useState({
    windowsImage: true,
    linuxImage: false,
    macImage: false,
  });
  // const [launch, setLaunch] = useState(false);

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.questionsLaunch.launchState);
  console.log(getData);
  return (
    <div>
      <div
        className="ques mx-auto "
        style={{ display: getData ? "none" : "block" }}
      >
        <div className="flex flex-col gap-9 ">
          <div className="px-8 py-8 bg-color box-radius">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sit arcu vitae. Nisi, metus, adipiscing sit rhoncus sed. Massa,
            scelerisque vel hac velLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc diam sit arcu vitae. Nisi, metus, adipiscing
            sit rhoncus sed. Massa, scelerisque vel hac vel.
          </div>
          <div className="flex flex-row gap-9 sec-height">
            <div className="px-5 py-5 bg-color relative test-case box-radius">
              01Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              diam sit arcu vitae. Nisi, metus, adipiscing sit rhoncus sed.
              Massa, scelerisque vel hac velLorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nunc diam sit arcu vitae. Nisi,
              metus, adipiscing sit rhoncus sed. Massa, scelerisque vel hac vel.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
              sit arcu vitae. Nisi, metus, adipiscing sit rhoncus sed. Massa,
              scelerisque vel hac vel.
              <div className="flex absolute bottom-0 mb-4">
                <Link to="/">
                  <div className="upload-btn text-white flex">
                    Upload
                    <img className="ml-2 h-6" src={upload} alt="upload" />
                  </div>
                </Link>
                <div className=" ml-10 text-white font-700 text-xl">
                  Points: <br />
                  25/100{" "}
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 ">
              <div className="bg-color pl-6 pt-6 pr-16 exec box-radius">
                To solve the question on your PC, download the executable file
                accordinng to your OS.
                <div
                  className="download-container mt-11 mx-16"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-between",
                    overflow: "hidden",
                    height: "40px",
                    width: "190px",
                    marginRight: "1.2rem",
                  }}
                >
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
                      className="icon h-5"
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
                      className="icon h-5"
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
                      className="icon h-5"
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
                      width: "2.75rem",
                      cursor: "pointer",
                      // opacity: active. ? "1" : "0.5",
                    }}
                  >
                    <img className="h-5" src={download} alt="download" />
                  </span>
                </div>
              </div>
              <div className="text-center text-2xl">OR</div>
              <div className="bg-color exec pl-6 pt-6 box-radius">
                Try with your own custom I/O online
                <div className="launch-btn text-white mt-16 mx-24 flex">
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
        <Ide />
      </div>
    </div>
  );
};

export default Questions;
