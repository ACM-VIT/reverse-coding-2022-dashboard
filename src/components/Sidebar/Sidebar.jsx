/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getLaunch } from "../../redux/QuestionsLaunch/questionsLaunchActions";

import "./Sidebar.css";
import logo from "../../assets/images/logo.svg";
import logout from "../../assets/images/logout2.svg";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.questionsLaunch.launchState);
  console.log(getData);

  return (
    <div className="h-screen fixed top-0 md:left-0 overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-black w-64 2xl:w-88 3xl:w-100 z-10 py-4 px-6 2xl:px-7 transition-all duration-300">
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-center w-full inline-block"
        >
          <img src={logo} alt="RC" className="pl-3" />
        </a>
        <div className="flex flex-col mt-24 2xl:mt-40">
          <ul className="flex-col min-w-full flex list-none text-lg 2xl:text-2.5xl 3xl:text-3xl font-robo leading-5 2xl:leading-10 3xl:leading-11">
            <li className="rounded-lg mb-2 2xl:mb-3">
              <NavLink
                to="/"
                exact
                className="flex items-center text-white px-4 py-3 3xl:py-4 rounded-lg 2xl:rounded-xl 3xl:rounded-2xl 2xl:pl-6"
                activeClassName="activeclassname text-white shadow-md"
              >
                DemoApi call
              </NavLink>
            </li>
            <li className="rounded-lg mb-2 2xl:mb-3">
              <NavLink
                to="/overview"
                exact
                className="flex items-center text-white px-4 py-3 3xl:py-4 rounded-lg 2xl:rounded-xl 3xl:rounded-2xl 2xl:pl-6"
                activeClassName="activeclassname text-white shadow-md"
              >
                Overview
              </NavLink>
            </li>
            <li
              className="rounded-lg mb-2 2xl:mb-3"
              onClick={() => {
                dispatch(getLaunch(false));
                history.push("/questions");
              }}
            >
              <div
                className="flex items-center text-white px-4 py-3 3xl:py-4 rounded-lg 2xl:rounded-xl 3xl:rounded-2xl 2xl:pl-6"
                activeClassName="text-white shadow-md"
              >
                Questions
              </div>
            </li>
            <li className="rounded-lg mb-2 2xl:mb-3">
              <NavLink
                to="/leaderboard"
                className="flex items-center text-white px-4 py-3 3xl:py-4 rounded-lg 2xl:rounded-xl 3xl:rounded-2xl 2xl:pl-6"
                activeClassName="activeclassname text-white shadow-md"
              >
                Leaderboard
              </NavLink>
            </li>
            <li className="rounded-lg mb-2 2xl:mb-3">
              <NavLink
                to="/faq"
                className="flex items-center text-white px-4 py-3 3xl:py-4 2xl:py-3.5 rounded-lg 2xl:rounded-xl 3xl:rounded-2xl 2xl:pl-6"
                activeClassName="activeclassname text-white shadow-md"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="flex mt-2 text-center w-full absolute bottom-0 pb-10 text-white justify-around brdr p-5 3xl:text-3xl 2xl:text-2.5xl text-lg font-robo">
          <p className="2xl:pt-3">Pranav Desai</p>
          <img
            src={logout}
            className="2xl:pt-2 3xl:pt-2.5 w-6 2xl:w-8 3xl:w-10"
            alt="RC"
          />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
