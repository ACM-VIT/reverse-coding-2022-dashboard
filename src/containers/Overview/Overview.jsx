import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import axios from "axios";
import admin from "../../assets/images/admin.svg";
import Submissions from "../../components/Submissions/Submissions";
import "./Overview.css";

import {
  getPeople,
  getProblems,
  getTeams,
  getLeaderboard,
  getJudgePoints,
} from "../../redux/GetAll/GetAllActions";

// require("dotenv").config();
const Overview = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const path = useLocation();

  useEffect(async () => {
    const token = path.pathname.slice(10);

    if (token) {
      sessionStorage.setItem("TK", token);
      window.history.replaceState(null, null, "/overview");
    }
    if (
      sessionStorage.getItem("TK") === null ||
      sessionStorage.getItem("TK") === ""
    ) {
      window.location.href = "/login";
    } else {
      const TK = sessionStorage.getItem("TK");

      await axios
        .get(process.env.REACT_APP_GET_TEAM, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${TK}`,
          },
        })
        .then(async (responseteams) => {
          console.log("teams", responseteams);
          dispatch(getTeams(responseteams.data));
          await axios
            .get(process.env.REACT_APP_GET_PROBLEMS, {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${TK}`,
              },
            })
            .then(async (responseproblems) => {
              console.log("problems", responseproblems);
              dispatch(getProblems(responseproblems.data));
              await axios
                .get(process.env.REACT_APP_GET_JUDGE, {
                  headers: {
                    "Content-Type": "application/json",
                    authorization: `Bearer ${TK}`,
                  },
                })
                .then(async (responsejudge) => {
                  console.log("leaderboard", responsejudge);
                  dispatch(getJudgePoints(responsejudge.data));
                  await axios
                    .get(process.env.REACT_APP_GET_LEADERBOARD, {
                      headers: {
                        "Content-Type": "application/json",
                        authorization: `Bearer ${TK}`,
                      },
                    })
                    .then((responseleaderboard) => {
                      console.log("leaderboard", responseleaderboard);
                      dispatch(getLeaderboard(responseleaderboard.data));
                    })
                    .catch((err) => {
                      console.log(err);
                    });
                })
                .catch((err) => {
                  console.log(err);
                });
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => {
          console.log("err", err);
        });
    }
  }, []);

  const team = useSelector((state) => state.getAll.teams);
  const submissions = useSelector((state) => state.getAll.judgePoints);
  console.log(team);
  function submissionRedirect() {
    history.push("/questions");
  }
  return (
    <div className="pl-52 2xl:pl-72 md:ml-64 2xl:ml-80 3xl:ml-100">
      <div className="grid grid-cols-3 mr-60 font-dm font-bold pt-32 2xl:pt-52">
        <div className="text-white break-words break-normal">
          <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl pb-4 2xl:pb-7">
            Team
          </h1>
          <p className="text-4xl 2xl:text-5.5xl 3xl:text-6xl text-prpl 2xl:leading-12">
            {team.name}
          </p>
        </div>
        <div className="text-white break-words break-normal">
          <div className="flex flex-col float-right items-start">
            <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl pb-2 2xl:pb-5 3xl:pb-6">
              Members
            </h1>
            {Object.keys(team).length === 0 ? (
              <p>Loading...</p>
            ) : (
              team.participants.map((part) => (
                <div className="flex" key={part.id}>
                  <p className="text-gre 2xl:text-1.5xl 3xl:text-2xl pl-1 pr-2 pb-0.5">
                    {part.name}
                  </p>
                  {part.isAdmin && (
                    <img
                      className="2xl:w-6 2xl:ml-1 mb-0.5 2xl:mb-0.5"
                      src={admin}
                      alt="admin"
                    />
                  )}
                </div>
              ))
            )}
          </div>
        </div>
        <div className="text-white text-right">
          <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl pb-4 2xl:pb-9 3xl:pb-7">
            Score
          </h1>
          <p className="text-4xl 2xl:text-5.5xl 3xl:text-6xl pt-1">
            {team.points}
          </p>
        </div>
      </div>
      <div className="font-dm font-bold text-white pt-20 2xl:pt-32">
        <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl">My Submissions</h1>
        {submissions.length > 0 ? (
          <Submissions />
        ) : (
          <div className="flex flex-col items-center space-y-10 pr-40">
            <h1 className="text-4xl 2xl:text-5.5xl 3xl:text-6xl text-grey pt-32 2xl:pt-40 2xl:pb-4">
              No Submissions
            </h1>
            <div
              className="flex justify-center items-center cursor-pointer z-10 prpl rounded-full 2xl:rounded-full w-60 h-14 2xl:w-80 2xl:h-20"
              onClick={submissionRedirect}
            >
              <div className="text-white text-xl 2xl:text-3xl font-medium">
                Begin Solving
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;
