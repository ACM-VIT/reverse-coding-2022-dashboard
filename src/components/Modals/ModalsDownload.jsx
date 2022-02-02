/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React, { useState, useCallback } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import LinearProgress from "@material-ui/core/LinearProgress";
import { useDropzone } from "react-dropzone";
import upload from "../../assets/images/upload.svg";
import "./Modals.css";
function ModalsDownload(props) {
  console.log(props.filename);
  console.log("download modal props", props);
  const limit = 100;
  const normalise = (value) => ((value - 0) * 100) / (limit - 0);
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
              <div className=" pb-4 text-base fontdmteam">Selection:</div>

              {/* <div
                className=" text-right input-file mt-4"
                {...getRootProps({ className: "dropzone" })}
              > */}
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalsDownload;
