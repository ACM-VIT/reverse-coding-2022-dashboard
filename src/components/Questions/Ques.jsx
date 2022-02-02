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
import { postJudge } from "../../redux/PostJudge/postJudgeActions";
import "./Ques.css";

const Ques = ({ data, input }) => {
  const [active, setActive] = useState({
    windowsImage: true,
    linuxImage: false,
    macImage: false,
  });
  const [problemid, setProblemid] = useState(data.id);
  console.log(input);
  const [open, setOpen] = useState(false);
  const [filename, setFilename] = useState("");
  const [disable, setDisable] = useState(true);
  const [downloadFile, setDownloadFile] = useState("");
  const [fileType, setFileType] = useState("");

  console.log("doenloadfiel", downloadFile);
  console.log(open);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFilename("");
  };
  const convertBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      console.log("base64", window.btoa(base64));
      setDownloadFile(window.btoa(base64));
    };
    reader.onerror = (error) => {
      console.log("Error: ", error);
    };
  };
  const handlechangefile = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      try {
        if (!e.target.files[0].name.split(".")[1].match(/^(java|js|go|py)$/)) {
          setDisable(true);
          setFilename("");
          console.log("file not supported");
        } else if (e.target.files[0].size > 47185920) {
          setDisable(true);
          console.log("file size is too big");
          setFilename("");
        } else {
          const base64 = await convertBase64(file);
          console.log("base64insidehandle", base64);
          setFileType(e.target.files[0].name.split(".")[1]);
          setDisable(false);
          setFilename(e.target.files[0].name);
        }
      } catch (error) {
        console.log("errorfew", error);
      }
    } else {
      setDisable(true);
      setFilename("");
    }
  };

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.questionsLaunch.launchState);
  const getTeam = useSelector((state) => state.getAll.teams);
  const getTeamid = getTeam.id;
  const getTeampoints = getTeam.points;
  console.log(getData);
  const handleupload = () => {
    console.log("handleuplaod");
    dispatch(postJudge(problemid, getTeamid, fileType, downloadFile));
    handleClose();
  };
  return (
    <div>
      <div
        className="ques mx-auto "
        style={{ display: getData ? "none" : "block" }}
      >
        <div className="flex flex-col gap-7 ">
          <div className="px-8 py-8 bg-color box-radius">
            {data.instructionsText}
          </div>
          <div className="flex flex-row gap-7 sec-height">
            <div className="px-5 py-5 bg-color relative test-case box-radius">
              <div
                style={{
                  color:
                    data.name === "ACCEPTED"
                      ? "rgba(39, 174, 96, 1)"
                      : data.name === "WRONG"
                      ? "rgba(235, 87, 87, 1)"
                      : "rgba(242, 201, 76, 1)",
                }}
              >
                {data.name}
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
                    handleupload={handleupload}
                  />
                </div>

                <div className=" ml-8 2xl:ml-20 text-white font-700 text-lg 2xl:text-2xl">
                  Points: <br />
                  {getTeampoints}/{data.maxPoints}
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
                <div
                  onClick={() => {
                    dispatch(getLaunch(true));
                  }}
                  className="launch-btn text-white mt-12 2xl:mt-20 mx-auto flex"
                >
                  <span>Launch</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div style={{ display: getData ? "block" : "none" }}>
        <Ide
          name={data.instructionsText}
          id={data.id}
          maxPoints={data.maxPoints}
          input={input}
        />
      </div>
    </div>
  );
};

export default Ques;
