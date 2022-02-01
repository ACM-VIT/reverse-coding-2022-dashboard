import React, { useState, useEffect } from "react";
import axios from "axios";
import admin from "../../assets/images/admin.svg";
import Submissions from "../../components/Submissions/Submissions";

import "./Overview.css";

const Overview = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/72378e9b-8aca-434f-97fd-5c921bb31c58")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function submissionRedirect() {
    window.location.href = "/questions";
  }

  return (
    <div className="pl-52 2xl:pl-72">
      {users.map((user) => (
        <div
          className="grid grid-cols-3 2xl:gap-x-40 font-dm font-bold pt-32 2xl:pt-52"
          key={user.email}
        >
          <div className="text-white space-y-3">
            <h1 className="text-3xl 2xl:text-4.5xl 2xl:pb-3">Team</h1>
            <p className="text-4xl 2xl:text-5.5xl text-prpl">{user.team}</p>
          </div>
          <div className="text-white pl-24">
            <h1 className="text-3xl 2xl:text-4.5xl pb-2 2xl:pb-4">Members</h1>
            <div className="flex">
              <p className="text-gre 2xl:text-xl pr-2">{user.name}</p>
              <img src={admin} alt="admin" />
            </div>
            <p className="text-gre 2xl:text-xl">Jeet Kaushik</p>
          </div>
          <div className="text-white space-y-3 pl-4">
            <h1 className="text-3xl 2xl:text-4.5xl 2xl:pb-3">Score</h1>
            <p className="text-4xl 2xl:text-5.5xl pt-1">{user.score}</p>
          </div>
        </div>
      ))}

      <div className="font-dm font-bold text-white pt-20 2xl:pt-32">
        <h1 className="text-3xl 2xl:text-4.5xl">My Submissions</h1>
        {/* <div className="flex flex-col items-center space-y-10 pr-40">
          <h1 className="text-4xl 2xl:text-5.5xl text-grey pt-32 2xl:pt-40 2xl:pb-4">
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
        </div> */}
        <Submissions />
      </div>
    </div>
  );
};

export default Overview;
