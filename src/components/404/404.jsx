/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Link } from "react-router-dom";

// Styling
import "./404.css";

// Assets
// import NotFound from "../../assets/images/404.svg";

const NotFound404 = () => (
  <div className="bg-image">
    <div className="absolute xxs:pl-12 xs:pl-16 sm:pl-20 pl-24 pt-8">
      {/**  TODO: what path should be put here? */}
      <Link to="/">{/* <img src={NotFound} alt="Logo" /> */}</Link>
    </div>
    <div className="flex h-screen justify-center items-center overflow-y-hidden">
      <div className="container mx-auto ">
        <div className="flex flex-col justify-center items-center mx-2 xs:text-center sm:text-center md:text-center lg:text-center xl:text-center xf:text-center xxl:text-center">
          <div className="text-5xl text-white font-700 pb-8">
            404 - Looks like you're lost.
          </div>
          <div className="text-xl mt-2 text-white font-400 xxs:px-0 xs:px-0  px-20">
            <p>Looks like this page doesn't exist.</p>
            <p>But don't let that stop you!</p>
          </div>
          <div className="text-xl mt-2 text-white font-400 pt-4">
            Head back to the home page right away!
          </div>
          <Link to="/register">
            <div className="mt-12 font-semibold py-2 px-4 cursor-pointer brdr">
              <span className="grad">Go Back</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default NotFound404;
