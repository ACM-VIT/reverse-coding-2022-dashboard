import React from "react";

import admin from "../../assets/images/admin.svg";

import "./Overview.css";

const Overview = () => (
  <div className="pl-52">
    <div className="grid grid-cols-3 font-dm font-bold pt-36">
      <div className="text-white space-y-3">
        <h1 className="text-3xl">Team</h1>
        <p className="text-4xl text-prpl">Bina Aloo Pyaz</p>
      </div>
      <div className="text-white pl-24">
        <h1 className="text-3xl pb-2">Members</h1>
        <div className="flex">
          <p className="text-gre pr-2">Likhit Ajeesh</p>
          <img src={admin} alt="admin" />
        </div>
        <p className="text-gre">Jeet Kaushik</p>
      </div>
      <div className="text-white space-y-3 pl-4">
        <h1 className="text-3xl">Score</h1>
        <p className="text-4xl pt-1">459</p>
      </div>
    </div>

    <div className="font-dm font-bold text-white pt-24">
      <h1 className="text-3xl">My Submissions</h1>
      <div className="flex flex-col items-center space-y-10 pr-40">
        <h1 className="text-4xl text-grey pt-20">No Submissions</h1>
        <div className="flex justify-center items-center cursor-pointer z-10 grad-bg rounded-3xl w-60 h-14">
          <div className="text-white text-xl font-medium">Begin Solving</div>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
