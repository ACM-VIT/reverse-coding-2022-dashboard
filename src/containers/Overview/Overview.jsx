import React from "react";

import "./Overview.css";

const Overview = () => (
  <div className="pl-52">
    <div className="grid grid-cols-3 font-dm pt-40">
      <div className="text-white space-y-3">
        <h1 className="text-2xl">Team</h1>
        <p className="text-4xl text-prpl">Bina Aloo Pyaz</p>
      </div>
      <div className="text-white space-y-3 pl-28">
        <h1 className="text-2xl">Score</h1>
        <p className="text-4xl">459</p>
      </div>
      <div className="text-white">
        <h1 className="text-2xl pb-2">Members</h1>
        <p>Likhit Ajeesh</p>
        <p>Jeet Kaushik</p>
      </div>
    </div>

    <div className="font-dm text-white pt-24">
      <h1 className="text-3xl">My Submissions</h1>
      <div className="flex flex-col items-center space-y-10 pr-40">
        <h1 className="text-4xl text-grey pt-20">No Submissions</h1>
        <div className="flex justify-center items-center cursor-pointer z-10 grad-bg rounded-3xl w-60 h-14">
          <div className="text-white text-xl">Begin Solving</div>
        </div>
      </div>
    </div>
  </div>
);

export default Overview;
