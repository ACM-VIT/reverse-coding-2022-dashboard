/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Assets
import logo from "../../assets/images/logo.svg";

// Styling
import "./Form.css";

const Form = () => {
  const [college, setCollege] = useState("");
  const [fresher, setFresher] = useState({ value: "Yes" });
  const [resFresher, setResFresher] = useState();
  const [registration, setRegistration] = useState("");
  const [phone, setPhone] = useState("");
  const [displayName, setDisplayName] = useState("");

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
  const redirectFunc = () => {
    sessionStorage.clear();
    window.location.href = `/login`;
  };
  return (
    <>
      <ToastContainer theme="colored" />
      <div className="bg-image">
        <img
          src={logo}
          alt="RC"
          className="inline pt-8 pl-20 w-44 xl:w-56 2xl:w-64 3xl:w-72"
        />
        <div
          alt="RC"
          className="inline absolute  right-0 pt-10 pr-20 w-44 xl:w-56 2xl:w-64 3xl:w-72 cursor-pointer "
          onClick={redirectFunc}
        >
          <div className="grad-bg text-white text-center py-2 2xl:py-3 2xl:text-lg 3xl:py-4 3xl:text-xl rounded-md">
            Log out
          </div>
        </div>
        <div className="flex flex-col form-box font-400">
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
      </div>
    </>
  );
};

export default Form;
