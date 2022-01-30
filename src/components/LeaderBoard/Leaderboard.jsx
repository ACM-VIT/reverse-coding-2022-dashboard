import React from "react";
import "./Pages.css";
function Leaderboard({ person, key }) {
  return (
    // <tr>
    //   <td>{person.id}</td>
    //   <td>{person.name}</td>
    //   <td>{person.name}</td>
    // </tr>
    <div className="grid grid-cols-3 mx-40">
      <td className=" justify-start text-left text-xl py-4">{person.id}</td>
      <td className="justify-center text-center text-xl py-4">{person.name}</td>
      <td className="justify-end text-right text-xl py-4">{person.name}</td>
      <hr className="hr-bottom col-span-3" />
    </div>
  );
}

export default Leaderboard;
