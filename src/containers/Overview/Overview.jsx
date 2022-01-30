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
    <div className="pl-52">
      {users.map((user) => (
        <div
          className="grid grid-cols-3 font-dm font-bold pt-32"
          key={user.email}
        >
          <div className="text-white space-y-3">
            <h1 className="text-3xl">Team</h1>
            <p className="text-4xl text-prpl">{user.team}</p>
          </div>
          <div className="text-white pl-24">
            <h1 className="text-3xl pb-2">Members</h1>
            <div className="flex">
              <p className="text-gre pr-2">{user.name}</p>
              <img src={admin} alt="admin" />
            </div>
            <p className="text-gre">Jeet Kaushik</p>
          </div>
          <div className="text-white space-y-3 pl-4">
            <h1 className="text-3xl">Score</h1>
            <p className="text-4xl pt-1">{user.score}</p>
          </div>
        </div>
      ))}

      <div className="font-dm font-bold text-white pt-16">
        <h1 className="text-3xl">My Submissions</h1>
        {/* <div className="flex flex-col items-center space-y-10 pr-40">
          <h1 className="text-4xl text-grey pt-20">No Submissions</h1>
          <div
            className="flex justify-center items-center cursor-pointer z-10 grad-bg rounded-3xl w-60 h-14"
            onClick={submissionRedirect}
          >
            <div className="text-white text-xl font-medium">Begin Solving</div>
          </div>
        </div> */}
        <Submissions />
      </div>
    </div>
  );
};

export default Overview;
