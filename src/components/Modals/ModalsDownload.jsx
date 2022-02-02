/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useEffect } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDropzone } from "react-dropzone";
import download from "../../assets/images/download2.svg";
import windowsDoc from "../../assets/instructionPDF/RC-Windows-Doc.pdf";
import linuxDoc from "../../assets/instructionPDF/RC-Linux-Doc.pdf";
import macDoc from "../../assets/instructionPDF/RC-Mac-Doc.pdf";
import "./Modals.css";
function ModalsDownload(props) {
  const limit = 100;
  const normalise = (value) => ((value - 0) * 100) / (limit - 0);

  const [doc, setDoc] = useState(windowsDoc);
  const [docName, setDocName] = useState("");

  const instructions = () => {
    if (props.selection === "Windows") {
      setDoc(windowsDoc);
    }
    if (props.selection === "Linux") {
      setDoc(linuxDoc);
    }
    if (props.selection === "Mac") {
      setDoc(macDoc);
    }
  };
  const docname = () => {
    if (props.selection === "Windows") {
      setDocName("windowsDoc");
    }
    if (props.selection === "Linux") {
      setDocName("linuxDoc");
    }
    if (props.selection === "Mac") {
      setDocName("macDoc");
    }
  };
  useEffect(() => {
    instructions();
    docname();
  });

  return (
    <div>
      <Modal
        {...props}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableAutoFocus
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 1300,
          style: {
            backgroundColor: "rgba(255,255,255,0.075)",
            backdropFilter: "blur(4px)",
          },
        }}
      >
        <Fade in={props.open}>
          <Box className=" shadows stile">
            <div className="flex flex-col text-center pt-2">
              <div className=" pb-4 text-xl fontdmteam">
                Your Downlaod is Done
              </div>
              <div className=" pb-4 text-base fontdmteam">
                Selection: {props.selection}
              </div>

              <div className="pb-4 pt-6 text-base fontdmteam flex mx-auto">
                <span className="pr-2">Download the Instructions Pdf</span>

                <div>
                  <a href={doc} download={docName}>
                    <img src={download} alt="download" />
                  </a>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalsDownload;
