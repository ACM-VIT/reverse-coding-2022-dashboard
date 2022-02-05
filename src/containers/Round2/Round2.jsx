import React from "react";
import Hard from "../../components/Wheels/Hard";
import Medium from "../../components/Wheels/Medium";
import Easy from "../../components/Wheels/Easy";

const Round2 = () => (
  <div className="ml-64 2xl:ml-80 3xl:ml-100 mt-56 flex justify-center ">
    <div>
      <Hard />
      <div className="hidden">
        <Medium />
      </div>
      <div className="hidden">
        <Easy />
      </div>
    </div>
  </div>
);

export default Round2;
