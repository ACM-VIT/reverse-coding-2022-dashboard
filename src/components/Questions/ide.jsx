/* eslint-disable react/function-component-definition */
/* eslint-disable no-nested-ternary */

import React, { useState } from "react";
import { Link } from "react-router-dom";
import ModalsDownload from "../Modals/ModalsDownload";
import Modals from "../Modals/Modals";
import linux from "../../assets/images/linux.svg";
import mac from "../../assets/images/mac.svg";
import windows from "../../assets/images/windows.svg";
import download from "../../assets/images/download.svg";
import run from "../../assets/images/run.svg";
import upload from "../../assets/images/upload.svg";

import "./ide.css";

// const initialState = { inputTextArea: "" };

const Ide = ({ name, id, input, maxPoints, data }) => {
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
  console.log("ide open", open);
  console.log("ide open2", open2);
  const handleOpen = () => setOpen(true);
  const handleOpen2 = () => setOpen2(true);

  const handleClose = () => {
    setOpen(false);
    setFilename("");
  };
  const handleClose2 = () => {
    console.log("close");
    setOpen2(false);
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
          <div className="px-5 py-5 bg-color relative test-cases">
            <div
              style={{
                color:
                  id === "ACCEPTED"
                    ? "rgba(39, 174, 96, 1)"
                    : id === "WRONG"
                    ? "rgba(235, 87, 87, 1)"
                    : "rgba(242, 201, 76, 1)",
              }}
            >
              {id}
            </div>
            <div className="flex absolute bottom-0 mb-3 2xl:mb-6">
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

              <div className=" ml-10 2xl:ml-20  text-white font-700 text-lg 2xl:text-2xl">
                Points: <br />
                {maxPoints}/100
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <div className="flex flex-row gap-9">
              <div>
                <div className="bg-color pl-6 pt-6  input relative">
                  Input
                  <br />
                  <textarea className="text-area" />
                  <div className="flex ">
                    <Link to="/">
                      <div className="run-btn absolute bottom-0 mb-4 2xl:mb-6 text-white  flex">
                        <img className="2xl:h-5" src={run} alt="run" />
                      </div>
                    </Link>
                  </div>
                </div>
              </div>

              <div className="bg-color pl-6 pt-6 output">Output</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ide;
