/* eslint-disable no-unneeded-ternary */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState, useEffect } from "react";
import axios from "axios";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Assets
import logo from "../../assets/images/logo.svg";

// Styling
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [fresher, setFresher] = useState("No");
  const [registration, setRegistration] = useState("");
  const [phone, setPhone] = useState("+91");

  useEffect(() => {}, []);

  const notifySuccess = () => toast.success("Form submitted successfully!");
  const notifyError = () => toast.error("Fill all the fields!");

  const handleChange = (e) => {
    const { value } = e.target;
    setFresher({
      value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted");

    if (name.trim() === "" || phone.trim() === "") {
      notifyError();
    } else if (fresher.value === "Yes" && registration.trim() === "") {
      notifyError();
    } else {
      notifySuccess();
    }

    const data = {
      name: name.trim(),
      fresher: fresher.value === "Yes" ? true : false,
      registration: registration.trim(),
      phone: phone.trim(),
    };
    console.log(data);

    // axios
    //   .post("https://firebase.acmvit.in/participants/update", { data })
    //   .then((res) => {
    //     console.log(res);
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });
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

        <div className="flex flex-col form-box font-400">
          <div className="flex justify-center pt-8 text-4xl primary-purple">
            Hey, User
          </div>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col text-white p-8">
              <label>Name of University/College</label>
              <input
                type="text"
                id="college"
                className="text-white bg-transparent border border-gray-500 outline-none focus:outline-none px-2 py-1 mt-3 mb-5"
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Are you a Fresher? (eligible for only VIT Students)</label>
              <div className="flex items-center py-2 mb-3">
                <input
                  type="radio"
                  name="fresher"
                  value="Yes"
                  id="Yes"
                  onChange={handleChange}
                  required
                />
                <label className="ml-2">Yes</label>
                <input
                  className="ml-12"
                  type="radio"
                  name="fresher"
                  value="No"
                  id="Yes"
                  defaultChecked
                  onChange={handleChange}
                />
                <label className="ml-2">No</label>
              </div>
              <div className={`${fresher.value === "Yes" ? "" : "hidden"}`}>
                <label>
                  Registration Number (fill only if you are a Fresher)
                </label>
                <input
                  type="text"
                  id="registration"
                  className="text-white bg-transparent border border-gray-500 outline-none focus:outline-none px-2 py-1 mt-3 mb-5 w-full"
                  onChange={(e) => setRegistration(e.target.value)}
                />
              </div>
              <label>Phone Number</label>
              <PhoneInput
                limitMaxLength
                value={phone}
                className="text-white bg-transparent border border-gray-500 outline-none focus:outline-none px-2 py-1 mt-3 mb-5"
                onChange={setPhone}
                defaultCountry="IN"
                country="IN"
                useNationalFormatForDefaultCountryValue
                required
              />
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="text-white grad-bg rounded-md w-32 mt-3 py-2 cursor-pointer"
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
