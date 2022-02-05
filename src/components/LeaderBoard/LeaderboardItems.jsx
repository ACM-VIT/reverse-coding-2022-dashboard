/* eslint-disable import/prefer-default-export */
import React, { memo } from "react";
import "./LeaderboardItems.css";
function LeaderboardItems({ person }) {
  return (
    // <tr>
    //   <td>{person.id}</td>
    //   <td>{person.name}</td>
    //   <td>{person.name}</td>
    // </tr>
    <div className="grid grid-cols-3 mx-40">
      <td className=" justify-start text-left text-xl 3xl:text-3xl 2xl:text-3xl py-4 3xl:py-6 2xl:py-6">
        {person.rank}
      </td>
      <td className="justify-center text-center text-xl 3xl:text-3xl 2xl:text-3xl py-4 3xl:py-6 2xl:py-6">
        {person.name}
      </td>
      <td className="justify-end text-right text-xl 3xl:text-3xl 2xl:text-3xl py-4 3xl:py-6 2xl:py-6">
        {person.points}
      </td>
      <hr className="hr-bottom col-span-3" />
    </div>
  );
}

export default memo(LeaderboardItems);
