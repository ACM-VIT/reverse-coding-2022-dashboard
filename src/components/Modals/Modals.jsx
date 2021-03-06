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
function Modals(props) {
  // const [filename, setFilename] = useState("");
  const limit = 100;
  const normalise = (value) => ((value - 0) * 100) / (limit - 0);
  // if (props.open === false) {
  //   setFilename("");
  // }
  // const onDrop = useCallback((acceptedFiles) => {
  //   acceptedFiles.forEach((file) => {
  //     const reader = new FileReader();

  //     reader.onabort = () => console.log("file reading was aborted");
  //     reader.onerror = () => console.log("file reading has failed");
  //     reader.onload = () => {
  //       // Do whatever you want with the file contents
  //       const binaryStr = reader.result;
  //       console.log("READ ", binaryStr);
  //     };
  //     reader.readAsArrayBuffer(file);
  //   });
  //   // Do something with the files
  // }, []);
  // const { acceptedFiles, getRootProps, getInputProps, isDragActive } =
  //   useDropzone({ onDrop });
  // const files = acceptedFiles.map((file) => {
  //   <div>
  //     {file.path} - {file.size} bytes
  //   </div>;
  // });
  // const { acceptedFiles, fileRejections, getRootProps, getInputProps } =
  //   useDropzone({
  //     accept: "image/jpeg, image/png",
  //   });

  // const acceptedFileItems = acceptedFiles.map((file) => (
  //   <div key={file.path}>
  //     {file.path} - {file.size} bytes
  //   </div>
  // ));

  // const fileRejectionItems = fileRejections.map(({ file, errors }) => (
  //   <div key={file.path}>
  //     {file.path} - {file.size} bytes
  //     {errors.map((e) => (
  //       <div key={e.code}>{e.message}</div>
  //     ))}
  //   </div>
  // ));
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
              <div className=" pb-4 text-xl fontdmteam font-700">
                Select Code File To Upload
              </div>
              <div className=" pb-4 text-lg fontdmteam font-700">
                Instructions
              </div>
              <div className=" text-left text-lg pt-7 font-400">
                It should not exceed 5KB.
              </div>
              <div className=" text-left text-lg font-400">
                Supported languages are Java, JavaScript, C, C++, Go, Kotlin,
                PHP ,Python.
              </div>
              {/* <div
                className=" text-right input-file mt-4"
                {...getRootProps({ className: "dropzone" })}
              > */}
              <div
                className=" text-right input-file mt-4"
                // {...getRootProps({ className: "dropzone" })}
              >
                {/* {props.open ? filename : " "} */}
                {props.filename}
                {/* {files} */}
                {/* {acceptedFileItems}
                {fileRejectionItems} */}

                <label
                  htmlFor="upload"
                  className=" label-style text-base p-2 px-6 ml-4 font-400"
                >
                  Select File
                </label>
                <input
                  // {...getInputProps()}
                  type="file"
                  id="upload"
                  className=" "
                  hidden
                  onChange={(e) => props.onchange(e)}
                  accept=".cpp,.py,.java,.js,.go,.kt,.kts,.ktm,.c,.php"
                />

                {/* <input type="file" id="upload2" className="  " /> */}
              </div>
              <div>
                {/* {isDragActive ? (
                  <p>Drop the files here ...</p>
                ) : (
                  <p>Drag drop some files here, or click to select files</p>
                )} */}
              </div>
              <div className={props.btndis ? "getcursorDisable" : ""}>
                <div
                  onClick={props.handleupload}
                  className={props.btndis ? "getDisable" : ""}
                >
                  <button
                    type="button"
                    className="mt-8 upload-btn-modal p-3"
                    disabled={props.btndis}
                  >
                    <div className="flex">
                      <div className="px-1 font-400">Upload</div>
                      <div>
                        <img src={upload} alt="upload" />
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default Modals;
