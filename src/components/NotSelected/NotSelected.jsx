/* eslint-disable react/no-unescaped-entities */
import React from "react";

// Styling
import "./NotSelected.css";

// Assets
import Logo from "../../assets/images/logo.svg";

const NotSelected = () => (
  <div className="bg-image-401">
    <div className="absolute xxs:pl-12 xs:pl-16 sm:pl-20 pl-24 pt-8">
      <a href="https://rcpc.acmvit.in">
        <img src={Logo} alt="Logo" />
      </a>
    </div>
    <div className="flex h-screen justify-center items-center overflow-y-hidden">
      {/* <div className="container mx-auto "> */}
      <div className="flex flex-col justify-center items-center mx-2 xs:text-center sm:text-center md:text-center lg:text-center xl:text-center xf:text-center xxl:text-center">
        <div className="2xl:text-6xl 3xl:text-7xl text-5xl text-white font-700 pb-2">
          Oops!
        </div>
        <div className="2xl:text-xl 3xl:text-2xl text-lg mt-2 text-white font-400 xxs:px-0 xs:px-0  px-20">
          <p>We are sorry to inform that you couldn't make it to Round 2!</p>
        </div>
        <div className="2xl:text-3xl 3xl:text-4xl text-2xl mt-2 text-white font-400 pt-5">
          Thankyou so much for participating in{" "}
          <span className="primary-purple">Reverse Coding'22!</span>
        </div>
        <div className="2xl:text-2xl 3xl:text-3xl text-xl mt-2 text-white font-400 pt-5">
          We would love to see you again at future ACM-VIT events!
        </div>
        <a href="https://rcpc.acmvit.in">
          <div className="mt-12 grad-bg text-white font-400 py-2 px-4 w-28 2xl:w-32 3xl:w-36 cursor-pointer rounded-xl">
            <span className="text-normal 2xl:text-md 3xl:text-lg">Go Back</span>
          </div>
        </a>
      </div>
      {/* </div> */}
    </div>
  </div>
);

export default NotSelected;
