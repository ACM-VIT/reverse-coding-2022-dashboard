/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

// Styling
import "./404.css";

// Assets
import Logo from "../../assets/images/logo.svg";

const NotFound404 = () => (
  <div className="bg-image-404">
    <div className="absolute xxs:pl-12 xs:pl-16 sm:pl-20 pl-24 pt-8">
      <Link to="/">
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
    <div className="flex h-screen justify-center items-center overflow-y-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center mx-2 xs:text-center sm:text-center md:text-center lg:text-center xl:text-center xf:text-center xxl:text-center">
          <div className="2xl:text-6xl 3xl:text-7xl text-5xl text-white font-700 pb-8">
            404 - Looks like you're lost.
          </div>
          <div className="2xl:text-2xl 3xl:text-3xl text-xl mt-2 text-white font-400 xxs:px-0 xs:px-0  px-20">
            <p>Looks like this page doesn't exist.</p>
            <p>But don't let that stop you!</p>
          </div>
          <div className="2xl:text-2xl 3xl:text-3xl text-xl mt-2 text-white font-400 pt-4">
            Head back to the home page right away!
          </div>
          <Link to="/">
            <div className="mt-12 grad-bg text-white font-400 py-2 px-4 w-28 2xl:w-32 3xl:w-36 cursor-pointer rounded-xl">
              <span className="text-normal 2xl:text-md 3xl:text-lg">
                Go Back
              </span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound404;
