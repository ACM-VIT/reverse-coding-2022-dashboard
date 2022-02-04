import React, { Component } from "react";
import { useDispatch } from "react-redux";
import { gauthSignIn } from "../../redux/login/loginActions";
import loginReducer from "../../redux/login/loginReducer";
import logo from "../../assets/images/logo.svg";
import rc from "../../assets/images/rc2022.svg";
import signin from "../../assets/images/signin.svg";
import subtext from "../../assets/images/subtext.gif";

import "./Login.css";

const Login = () => {
  const dispatch = useDispatch();

  return (
    <div className="bg-image">
      <img
        src={logo}
        alt="RC"
        className="inline pt-8 pl-20  w-44 xl:w-56 2xl:w-64 3xl:w-72 "
      />

      <div className="flex flex-col box relative">
        <img src={rc} alt="Reverse Coding" />
        <img src={subtext} alt="Subtext" className="w-100 mx-auto pt-8" />

        {/* <div className="absolute mx-auto flex"> */}
        <div onClick={() => dispatch(gauthSignIn())}>
          <img src={signin} alt="Sign In" className="button cursor-pointer" />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Login;
