/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-unneeded-ternary */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Backdrop from "@mui/material/Backdrop";
import "./Modals.css";
function ModalForm(props) {
  const [college, setCollege] = useState("");
  const [fresher, setFresher] = useState({ value: "Yes" });
  const [resFresher, setResFresher] = useState();
  const [registration, setRegistration] = useState("");
  const [phone, setPhone] = useState("");
  const [displayName, setDisplayName] = useState("");

  // const participant = useSelector((state) => state.getAll.people);
  // console.log("participantttt", participant);

  // useEffect(() => {
  //   const firstName = participant.name.split(" ")[0];
  //   setDisplayName(firstName);
  //   if (participant.phoneNumber !== "0000000000") {
  //     setCollege(participant.college);
  //     setRegistration(participant.registrationNumber);
  //     setPhone(participant.phoneNumber);
  //     // setResFresher(res.data.fresher);
  //   }
  // }, []);

  useEffect(() => {
    const token = sessionStorage.getItem("WT");
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${token}`,
    };
    axios
      .get(`${process.env.REACT_APP_BASEURL}/participants`, { headers })
      .then((res) => {
        const firstName = res.data.name.split(" ")[0];
        setDisplayName(firstName);
        if (res.data.phoneNumber !== "0000000000") {
          setCollege(res.data.college);
          setRegistration(res.data.registrationNumber);
          setPhone(res.data.phoneNumber);
          // setResFresher(res.data.fresher);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const notifySuccess = () => toast.success("Form submitted successfully!");

  const handleChange = (e) => {
    //  { value } = e.target;
    setFresher({
      value: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    /** Regex for freshers'(2022) reg number */
    const reg = /^21[A-Z]{3}[0-9]{4}$/;

    /** Regex for college name */
    const collegeRegEx = /^[A-Za-z ]+$/;

    /** Regex for phone number */
    const phoneRegEx = /^\+[1-9]{1}[0-9]{3,14}$/;

    /** Validations */
    if (college.trim() === "" || phone.trim() === "") {
      toast.error("Fill all the fields!");
    } else if (fresher.value === "Yes" && registration.trim() === "") {
      toast.error("Fill all the fields!");
    } else if (collegeRegEx.test(college) === false) {
      toast.error("College name should be in alphabets!");
    } else if (fresher.value === "Yes" && reg.test(registration) === false) {
      toast.error("Invalid registration number!");
    } else if (phoneRegEx.test(phone) === false) {
      toast.error("Invalid phone number!");
    } else {
      notifySuccess();

      const data = {
        college: college.trim(),
        fresher: fresher.value === "Yes" ? true : false,
        registrationNumber: registration.trim(),
        phoneNumber: phone.trim(),
      };

      const token = sessionStorage.getItem("WT");
      const headers = {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      };

      axios
        .post(
          `${process.env.REACT_APP_BASEURL}/participants/update`,
          JSON.stringify(data),
          { headers }
        )
        .then(() => {
          window.location.href = "/overview";
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  // const redirectFunc = () => {
  //   sessionStorage.clear();
  //   window.location.href = `/login`;
  // };
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
          <Box className=" shadows form-box-modal">
            <div className="flex flex-col font-400">
              <div className="flex justify-center pt-8 text-4xl 2xl:text-5xl primary-purple">
                Hey, {displayName}
              </div>
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col text-white p-8">
                  <label className="text-normal 2xl:text-md 3xl:text-lg">
                    Name of University/College
                  </label>
                  <input
                    type="text"
                    id="college"
                    className="text-normal 2xl:text-md 3xl:text-lg text-white bg-transparent border border-gray-500 outline-none focus:outline-none px-2 2X2xl:px-3 3xl:px-4 py-1 2xl:py-2 3xl:py-3 mt-3 2xl:mt-4 3xl:mt-5 mb-5 2xl:mb-6 3xl:mb-7"
                    value={college}
                    onChange={(e) => setCollege(e.target.value)}
                  />
                  <label className="text-normal 2xl:text-md 3xl:text-lg">
                    Are you a Fresher? (eligible for only VIT Students)
                  </label>
                  <div className="flex items-center py-2 mb-3">
                    <input
                      className="h-18"
                      type="radio"
                      name="fresher"
                      value="Yes"
                      id="Yes"
                      defaultChecked
                      onChange={handleChange}
                    />
                    <label className="text-normal 2xl:text-md 3xl:text-lg ml-2">
                      Yes
                    </label>
                    <input
                      className="ml-12"
                      type="radio"
                      name="fresher"
                      value="No"
                      id="No"
                      onChange={handleChange}
                    />
                    <label className="text-normal 2xl:text-md 3xl:text-lg ml-2">
                      No
                    </label>
                  </div>
                  <div className={`${fresher.value === "Yes" ? "" : "hidden"}`}>
                    <label className="text-normal 2xl:text-md 3xl:text-lg">
                      Registration Number (fill only if you are a Fresher)
                    </label>
                    <input
                      type="text"
                      id="registration"
                      className="text-normal 2xl:text-md 3xl:text-lg text-white bg-transparent border border-gray-500 outline-none focus:outline-none px-2 2xl:px-3 3xl:px-4 py-1 2xl:py-2 3xl:py-3 mt-3 2xl:mt-4 3xl:mt-5 mb-5 2xl:mb-6 3xl:mb-7 w-full"
                      value={registration}
                      onChange={(e) => setRegistration(e.target.value)}
                    />
                  </div>
                  <label className="text-normal 2xl:text-md 3xl:text-lg">
                    Phone Number (with country code)
                  </label>
                  <input
                    className="text-normal 2xl:text-md 3xl:text-lg text-white bg-transparent border border-gray-500 outline-none focus:outline-none px-2 2xl:px-3 3xl:px-4 py-1 2xl:py-2 3xl:py-3 mt-3 2xl:mt-4 3xl:mt-5 mb-5 2xl:mb-6 3xl:mb-7"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                  <div className="flex justify-center">
                    <button
                      type="submit"
                      className="text-normal 2xl:text-md 3xl:text-lg text-white grad-bg rounded-md w-32 3xl:w-40 mt-3 py-2 cursor-pointer"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

export default ModalForm;
