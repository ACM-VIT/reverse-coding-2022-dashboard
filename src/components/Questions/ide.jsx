/* eslint-disable react/function-component-definition */
/* eslint-disable no-nested-ternary */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ModalsDownload from "../Modals/ModalsDownload";
import Modals from "../Modals/Modals";
import linux from "../../assets/images/linux.svg";
import mac from "../../assets/images/mac.svg";
import windows from "../../assets/images/windows.svg";
import download from "../../assets/images/download.svg";
import run from "../../assets/images/run.svg";
import upload from "../../assets/images/upload.svg";
import {
  postTask,
  postJudge,
  taskRunner,
} from "../../redux/PostJudge/postJudgeActions";

import "./ide.css";
import { CODE_STATES } from "../../redux/PostJudge/states";

// const initialState = { inputTextArea: "" };

const Ide = ({ name, id, inputprop, maxPoints, data }) => {
  const dispatch = useDispatch();
  const [problemid, setProblemid] = useState(data.id);

  const [active, setActive] = useState({
    windowsImage: true,
    linuxImage: false,
    macImage: false,
  });
  const [selection, setSelection] = useState("");
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

  // const [inputTextArea, setState] = useState(initialState);
  // const clearState = () => {
  //   setState({ initialState });
  // };

  // const onChange = (e) => {
  //   const { name, value } = e.target;
  //   setState((prevState) => ({ prevState, [name]: value }));
  // };

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [filename, setFilename] = useState("");
  const [disable, setDisable] = useState(true);
  const [input, setInput] = useState("");
  const [downloadFile, setDownloadFile] = useState("");
  const [fileType, setFileType] = useState("");

  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);

  const handleClose = () => {
    setOpen(false);
    setFilename("");
  };
  const handleClose2 = () => {
    setOpen2(false);
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
  const handlechangefile = async (e) => {
    if (e.target.files[0]) {
      const file = e.target.files[0];
      try {
        if (
          !e.target.files[0].name
            .split(".")[1]
            .match(/^(java|js|go|py|cpp|c|kt|php)$/)
        ) {
          setDisable(true);
          setFilename("");
          toast.error("File type not supported");
        } else if (e.target.files[0].size > 5000) {
          setDisable(true);
          // console.log("file size is too big");
          setFilename("");
          toast.error("File size too big");
        } else {
          const base64 = await convertBase64(file);
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
  const handleClickRun = async () => {
    if (input.length === 0) {
      toast.error("Please enter a valid input");
    } else {
      await dispatch(postTask(input.toString(), id));
    }
  };

  const getData = useSelector((state) => state.questionsLaunch.launchState);
  const getTeam = useSelector((state) => state.getAll.teams);
  const getJudgeMain = useSelector((state) => state.postJudge.judgeMain);
  const getJudgePoints = useSelector((state) => state.getAll.judgePoints);
  const getDisable = useSelector((state) => state.postJudge.disable);
  const getTeamid = getTeam.id;
  const taskrunner = useSelector((state) => state.postJudge.taskRunner);
  // const taskrunnerenter = taskrunner.replaceAll("\n", "");
  const handleupload = async () => {
    await dispatch(postJudge(problemid, getTeamid, fileType, downloadFile));
    setDisable(true);
    handleClose();
  };
  return (
    <div className="ide mx-auto">
      <div className="flex flex-col gap-9 ">
        <div className="px-8 py-8 bg-color relative">
          <div className="mb-10">{name}</div>
          <div className="absolute mt-16 right-0 bottom-0 mb-3 mr-3">
            <div className="download-container">
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
                  h
                  style={{
                    cursor: "pointer",
                    opacity: active.macImage ? "1" : "0.5",
                  }}
                />
              </span>
              <span
                onClick={() => {
                  handleOpen2();
                  downloadClick();
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
                <img className="h-5 2xl:h-7" src={download} alt="download" />
              </span>
            </div>
            <ModalsDownload
              open={open2}
              onClose={handleClose2}
              selection={selection}
            />
          </div>
        </div>
        <div className="flex flex-row gap-9 ">
          <div className="px-5 py-5 b2xl:px-8 bg-color relative test-case box-radius">
            <h1 className="pt-1 pb-1 pr-2 2xl:pb-3 2xl:pt-2 2xl:pl-2 3xl:pt-3.5 text-lg 2xl:text-2xl">
              Test Cases
            </h1>
            <div className="casess px-1 2xl:pl-3 overflow-y-auto space-y-2">
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
            <div className="flex absolute bottom-0 mb-4 2xl:mb-6 2xl:pl-2">
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

              <div className=" ml-8 2xl:ml-14 text-white font-700 text-lg 2xl:text-2xl">
                Points: <br />
                {getJudgeMain.points
                  ? getJudgeMain.points
                  : data.points === null
                  ? "-"
                  : data.points}
                /{data.maxPoints}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <div className="flex flex-row gap-9">
              <div>
                <div className="bg-color pl-6 pt-6 input relative">
                  <p className="pb-2 2xl:pb-3">Input</p>
                  <textarea
                    className="text-area overflow-y-auto"
                    onChange={(e) => setInput(e.target.value)}
                  />
                  <div className="flex ">
                    <div onClick={handleClickRun}>
                      <div className="run-btn absolute bottom-0 mb-4 2xl:mb-6 text-white  flex cursor-pointer">
                        <img className="2xl:h-5" src={run} alt="run" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-color pl-6 pt-6 output">
                <h1>Output</h1>
                <div dangerouslySetInnerHTML={{ __html: taskrunner }} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ide;
