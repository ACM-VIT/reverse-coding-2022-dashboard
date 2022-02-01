/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, useHistory } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import { getLaunch } from "../../redux/QuestionsLaunch/questionsLaunchActions";

const Sidebar = () => {
  const [active, setActive] = useState("");
  const history = useHistory();
  const dispatch = useDispatch();
  const getData = useSelector((state) => state.questionsLaunch.launchState);
  console.log(getData);
  return (
    <div className="h-screen fixed top-0 md:left-0  overflow-y-auto flex-row flex-nowrap overflow-hidden shadow-3xl bg-black w-64 z-10 py-4 px-6 transition-all duration-300">
      <div className="flex-col items-stretch min-h-full flex-nowrap px-0 relative">
        <a
          href="#"
          target="_blank"
          rel="noreferrer"
          className="mt-2 text-center w-full inline-block"
        >
          <img src={logo} alt="RC" className="pl-3" />
        </a>
        <div className="flex flex-col mt-52">
          <ul className="flex-col min-w-full flex list-none">
            <li className="rounded-lg mb-4">
              <NavLink
                to="/"
                exact
                className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                activeClassName="bg-gray-500 text-white shadow-md"
              >
                DemoApi call
              </NavLink>
              <NavLink
                to="/overview"
                exact
                className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                activeClassName="bg-gray-500 text-white shadow-md"
              >
                Overview
              </NavLink>
            </li>
            <li
              className="rounded-lg mb-2"
              onClick={() => {
                dispatch(getLaunch(false));
                history.push("/questions");
              }}
            >
              <div
                className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                activeClassName="bg-gray-500  text-white shadow-md"
              >
                Questions
              </div>
            </li>
            <li className="rounded-lg mb-2 ">
              <NavLink
                to="/leaderboard"
                className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                activeClassName="bg-gray-500 text-white shadow-md"
              >
                LeaderBoard
              </NavLink>
            </li>
            <li className="rounded-lg mb-2 ">
              <NavLink
                to="/faq"
                className="flex items-center gap-4 text-sm text-white font-light px-4 py-3 rounded-lg"
                activeClassName="bg-gray-500 text-white shadow-md"
              >
                FAQ
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Sidebar;
