import React, { useEffect, useState, memo } from "react";
import { useSelector } from "react-redux";
/* eslint-disable import/prefer-default-export */
import "./LeaderboardItems.css";

const LeaderboardItems = ({ person }) => {
  const getMyTeam = useSelector((state) => state.getAll.teams);

  const [purple, setPurple] = useState("");

  useEffect(() => {
    if (getMyTeam.name === person.name) {
      setPurple("purple");
    } else {
      setPurple("");
    }
  }, [getMyTeam.name, person.name]);

  return (
    <div className="grid grid-cols-3 mx-40">
      <td className=" justify-start text-left text-xl 3xl:text-3xl 2xl:text-3xl py-4 3xl:py-6 2xl:py-6">
        {person.rank}
      </td>
      <td
        className={`${purple} justify-center text-center text-xl 3xl:text-3xl 2xl:text-3xl py-4 3xl:py-6 2xl:py-6`}
      >
        {person.name}
      </td>
      <td className="justify-end text-right text-xl 3xl:text-3xl 2xl:text-3xl py-4 3xl:py-6 2xl:py-6">
        {person.pointsR2}
      </td>
      <hr className="hr-bottom col-span-3" />
    </div>
  );
};

export default memo(LeaderboardItems);
