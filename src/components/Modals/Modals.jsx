/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
import React, { useState } from "react";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import LinearProgress from "@material-ui/core/LinearProgress";
import upload from "../../assets/images/upload.svg";
import "./Modals.css";
function Modals(props) {
  // const [filename, setFilename] = useState("");
  console.log(props.filename);
  console.log(props);
  const limit = 100;
  const normalise = (value) => ((value - 0) * 100) / (limit - 0);
  // if (props.open === false) {
  //   setFilename("");
  // }
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
                Select Code File To Upload
              </div>
              <div className=" pb-4 text-base fontdmteam">Instructions</div>
              <LinearProgress
                variant="determinate"
                value={normalise(12)}
                color="primary"
              />
              <div className=" text-left text-lg pt-7">
                {" "}
                It should Not exceed
              </div>
              <div className=" text-left text-lg"> Supported languages are</div>
              <div className=" text-right input-file mt-4">
                {/* {props.open ? filename : " "} */}
                {props.filename}
                <label
                  htmlFor="upload"
                  className=" label-style text-base p-2 px-6 ml-4 "
                >
                  Select File
                </label>
                <input
                  type="file"
                  id="upload"
                  className=" "
                  hidden
                  onChange={(e) => props.onchange(e)}
                  accept=".cpp,.py,.java,.js,.go,.kt,.kts,.ktm"
                />

                {/* <input type="file" id="upload2" className="  " /> */}
              </div>
              <div>
                <button type="button" className="mt-8 upload-btn p-3">
                  <div className="flex">
                    <div className="px-1">Upload</div>
                    <div>
                      <img src={upload} alt="upload" />
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Modals;
