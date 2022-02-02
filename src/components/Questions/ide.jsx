/* eslint-disable react/function-component-definition */
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

const Ide = ({ name, id }) => {
  const [active, setActive] = useState({
    windowsImage: true,
    linuxImage: false,
    macImage: false,
  });

  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [filename, setFilename] = useState("");
  const [disable, setDisable] = useState(true);
  console.log("ide open", open);
  console.log("ide open2", open2);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFilename("");
  };
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);
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
        <div className="px-8 py-8 bg-color ">
          {name}
          <div
            className="download-container mt-2 execs"
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
              <ModalsDownload
                open={open2}
                onClose={handleClose2}
                selection={active}
              />
            </span>
          </div>
        </div>
        <div className="flex flex-row gap-9 ">
          <div className="px-5 py-5 bg-color relative test-cases">
            {id}
            <div className="flex absolute bottom-0 mb-4">
              <div>
                <div
                  className="upload-btn text-white flex"
                  onClick={handleOpen}
                >
                  Upload
                  <img className="ml-2 h-6" src={upload} alt="upload" />
                </div>
                <Modals
                  open={open}
                  onClose={handleClose}
                  onchange={handlechangefile}
                  filename={filename}
                  btndis={disable}
                />
              </div>

              <div className=" ml-10 text-white font-700 text-xl">
                Points: <br />
                25/100{" "}
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-9 ">
            <div className="flex flex-row gap-7">
              <div>
                <div className="bg-color pl-6 pt-6  input relative">
                  Input
                  <br />
                  <textarea className="text-area" />
                  <div className="flex ">
                    <Link to="/">
                      <div className="run-btn absolute bottom-0 mb-4 text-white  flex">
                        <img src={run} alt="run" />
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
