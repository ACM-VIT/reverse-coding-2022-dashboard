/* eslint-disable react/function-component-definition */
import React, { useState } from "react";
import linux from "../../assets/images/linux.svg";
import mac from "../../assets/images/mac.svg";
import windows from "../../assets/images/windows.svg";
import download from "../../assets/images/download.svg";

import "./Questions.css";

const Questions = () => {
  const [active, setActive] = useState({
    windowsImage: false,
    linuxImage: false,
    macImage: false,
  });

  return (
    <div className="ques mx-auto">
      <div className="flex flex-col gap-9 ">
        <div className="px-8 py-8 bg-color ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam sit
          arcu vitae. Nisi, metus, adipiscing sit rhoncus sed. Massa,
          scelerisque vel hac velLorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nunc diam sit arcu vitae. Nisi, metus, adipiscing sit
          rhoncus sed. Massa, scelerisque vel hac vel.
        </div>
        <div className="flex flex-row gap-9 sec-height">
          <div className="px-5 py-5 bg-color  test-case">
            01Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc diam
            sit arcu vitae. Nisi, metus, adipiscing sit rhoncus sed. Massa,
            scelerisque vel hac velLorem ipsum dolor sit amet, consectetur
            adipiscing elit. Nunc diam sit arcu vitae. Nisi, metus, adipiscing
            sit rhoncus sed. Massa, scelerisque vel hac vel. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Nunc diam sit arcu vitae.
            Nisi, metus, adipiscing sit rhoncus sed. Massa, scelerisque vel hac
            vel.
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="bg-color pl-6 pt-6 pr-16 exec">
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
                    className="icon"
                    height="21"
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
                    className="icon"
                    height="21"
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
                    className="icon"
                    height="21"
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
                  <img src={download} alt="download" height="21" />
                </span>
              </div>
            </div>
            <div className="text-center">OR</div>
            <div className="bg-color exec pl-6 pt-6">
              Try with your own custom I/O online
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Questions;
