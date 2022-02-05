/* eslint-disable react/function-component-definition */
/* eslint-disable no-nested-ternary */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import LoadingOverlay from "react-loading-overlay";
import "react-toastify/dist/ReactToastify.css";

import Ide from "./ide";
import Modals from "../Modals/Modals";
import ModalsDownload from "../Modals/ModalsDownload";
import linux from "../../assets/images/linux.svg";
import mac from "../../assets/images/mac.svg";
import windows from "../../assets/images/windows.svg";
import download from "../../assets/images/download.svg";
import upload from "../../assets/images/upload.svg";
import { getLaunch } from "../../redux/QuestionsLaunch/questionsLaunchActions";
import { judgeMain, postJudge } from "../../redux/PostJudge/postJudgeActions";
import "./Ques.css";
import { CODE_STATES } from "../../redux/PostJudge/states";

const Ques = ({ data, input, postJudgepoints }) => {
  const [active, setActive] = useState({
    windowsImage: true,
    linuxImage: false,
    macImage: false,
  });
  const [problemid, setProblemid] = useState(data.id);
  // console.log(input);
  const [selection, setSelection] = useState("");
  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [filename, setFilename] = useState("");
  const [disable, setDisable] = useState(true);
  const [downloadFile, setDownloadFile] = useState("");
  const [fileType, setFileType] = useState("");

  // console.log("doenloadfiel", downloadFile);
  // console.log(open);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);

  const handleClose = () => {
    setOpen(false);
    setFilename("");
  };
  const convertBase64 = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      const base64 = reader.result;
      setDownloadFile(base64.split(",")[1]);
    };
    reader.onerror = (error) => {
      toast.error("Try Again");
      // console.log("Error: ", error);
    };
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handlechangefile = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      try {
        if (
          !e.target.files[0].name
            .split(".")[1]
            .match(/^(java|php|js|go|py|cpp|c|kt)$/)
        ) {
          setDisable(true);
          setFilename("");
          // console.log("file not supported");
          toast.error("File type not supported");
        } else if (e.target.files[0].size > 5000) {
          setDisable(true);
          // console.log("file size is too big");
          setFilename("");
          toast.error("File size too big");
        } else {
          const base64 = await convertBase64(file);
          // console.log("base64insidehandle", base64);
          setFileType(e.target.files[0].name.split(".")[1]);
          setDisable(false);
          setFilename(e.target.files[0].name);
        }
      } catch (error) {
        // console.log("errorfew", error);
        toast.error("Error in uploading");
      }
    } else {
      setDisable(true);
      setFilename("");
    }
  };

  const downloadClick = () => {
    if (active.windowsImage) window.open(data.windowsFileURL, "_blank");
    if (active.linuxImage) window.open(data.objectFileURL, "_blank");
    if (active.macImage) window.open(data.macFileURL, "_blank");
  };
  const modalSelection = () => {
    if (active.windowsImage) {
      setSelection("Windows");
    }
    if (active.linuxImage) {
      setSelection("Linux");
    }
    if (active.macImage) {
      setSelection("Mac");
    }
  };

  const dispatch = useDispatch();
  const getData = useSelector((state) => state.questionsLaunch.launchState);
  const getTeam = useSelector((state) => state.getAll.teams);
  const getJudgecolor = useSelector((state) => state.postJudge.judgestatecol);
  const getJudgetext = useSelector((state) => state.postJudge.judgestatetext);
  const getJudgeMain = useSelector((state) => state.postJudge.judgeMain);
  const getJudgePoints = useSelector((state) => state.getAll.judgePoints);
  // const allDisable = () => {
  //   if (getJudgeMain === "") { }
  // }
  const getDisable = useSelector((state) => state.postJudge.disable);
  // console.log("DISABLED?", getDisable);
  const getTeamid = getTeam.id;
  const getTeampoints = getTeam.points;
  // console.log(getData);
  const handleupload = async () => {
    // console.log("handleuplaod");
    await dispatch(postJudge(data.id, getTeamid, fileType, downloadFile));
    setDisable(true);
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
            <div className="px-6 py-5 2xl:px-8 bg-color relative test-case box-radius">
              <h1 className="pt-1 pb-1 pr-2 2xl:pb-3 2xl:pt-2 3xl:pt-3.5 text-lg 2xl:text-2xl">
                Test Cases
              </h1>
              <div className="casess px-1 overflow-y-auto">
                <div
                  className={
                    CODE_STATES[getJudgeMain[1]]
                      ? CODE_STATES[getJudgeMain[1]].color
                      : ""
                  }
                >
                  <h1 className="text-white">Test Case 1</h1>
                  {CODE_STATES[getJudgeMain[1]]
                    ? CODE_STATES[getJudgeMain[1]].text
                    : ""}
                </div>
                <div
                  className={
                    CODE_STATES[getJudgeMain[2]]
                      ? CODE_STATES[getJudgeMain[2]].color
                      : ""
                  }
                >
                  <h1 className="text-white">Test Case 2</h1>

                  {CODE_STATES[getJudgeMain[2]]
                    ? CODE_STATES[getJudgeMain[2]].text
                    : ""}
                </div>
                <div
                  className={
                    CODE_STATES[getJudgeMain[3]]
                      ? CODE_STATES[getJudgeMain[3]].color
                      : ""
                  }
                >
                  <h1 className="text-white">Test Case 3</h1>

                  {CODE_STATES[getJudgeMain[3]]
                    ? CODE_STATES[getJudgeMain[3]].text
                    : ""}
                </div>
                <div
                  className={
                    CODE_STATES[getJudgeMain[4]]
                      ? CODE_STATES[getJudgeMain[4]].color
                      : ""
                  }
                >
                  <h1 className="text-white">Test Case 4</h1>

                  {CODE_STATES[getJudgeMain[4]]
                    ? CODE_STATES[getJudgeMain[4]].text
                    : ""}
                </div>
                <div
                  className={
                    CODE_STATES[getJudgeMain[5]]
                      ? CODE_STATES[getJudgeMain[5]].color
                      : ""
                  }
                >
                  <h1 className="text-white">Test Case 5</h1>

                  {CODE_STATES[getJudgeMain[5]]
                    ? CODE_STATES[getJudgeMain[5]].text
                    : ""}
                </div>
              </div>
              <div className="flex absolute bottom-0 mb-4 2xl:mb-6">
                <div className={getDisable ? "getcursorDisable" : ""}>
                  <div
                    className={
                      getDisable
                        ? "upload-btn text-white flex getDisable"
                        : "upload-btn text-white flex"
                    }
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

                <div className="ml-8 2xl:ml-16 text-white font-700 text-lg 2xl:text-2xl">
                  Points: <br />
                  {getJudgeMain.points
                    ? getJudgeMain.points
                    : data.points === null
                    ? "-"
                    : data.points}
                  /{data.maxPoints}
                  {/* {data.pointsJudgeMain !== null
                    ? data.pointsJudgeMain
                    : data.points === null
                    ? "-"
                    : data.points}
                  /{data.maxPoints} */}
                  {/* {data.pointsJudgeMain !== null
                    ? data.pointsJudgeMain
                    : data.points === null
                    ? "-"
                    : data.points}
                  /{data.maxPoints} */}
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
                      downloadClick();
                      handleOpen2();
                      modalSelection();
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
                <ModalsDownload
                  open={open2}
                  onClose={handleClose2}
                  selection={selection}
                />
              </div>
              <div className="text-center text-2xl 2xl:text-3xl">OR</div>
              <div className="bg-color exec  box-radius">
                <div className="pl-6 pt-6">
                  Try with your own custom I/O online
                </div>
                <div className={getDisable ? "getcursorDisable" : ""}>
                  <div
                    onClick={() => {
                      dispatch(getLaunch(true));
                    }}
                    className={
                      getDisable
                        ? "launch-btn text-white mt-12 2xl:mt-20 mx-auto flex getDisable"
                        : "launch-btn text-white mt-12 2xl:mt-20 mx-auto flex"
                    }
                  >
                    <span>Launch</span>
                  </div>
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
          data={data}
          inputprop={input}
        />
      </div>
    </div>
  );
};

export default Ques;
