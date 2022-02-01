import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import admin from "../../assets/images/admin.svg";
import Submissions from "../../components/Submissions/Submissions";

import "./Overview.css";

const Overview = () => {
  const [users, setUsers] = useState([]);
  const history = useHistory();

  useEffect(() => {
    axios
      .get("https://mocki.io/v1/58bde005-111f-4830-b49e-d90fd8ebbe3c")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function submissionRedirect() {
    history.push("/questions");
  }
  return (
    <div className="pl-52 2xl:pl-72">
      {users.map((user) => (
        <>
          <div
            className="grid grid-cols-3 mr-60 font-dm font-bold pt-32 2xl:pt-52"
            key={user.email}
          >
            <div className="text-white break-words break-normal">
              <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl pb-4 2xl:pb-7">
                Team
              </h1>
              <p className="text-4xl 2xl:text-5.5xl 3xl:text-6xl text-prpl 2xl:leading-12">
                {user.team}
              </p>
            </div>
            <div className="text-white break-words break-normal">
              <div className="flex flex-col float-right items-start">
                <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl pb-2 2xl:pb-5 3xl:pb-6">
                  Members
                </h1>
                <div className="flex">
                  <p className="text-gre 2xl:text-1.5xl 3xl:text-2xl pl-1 pr-2">
                    {user.name}
                  </p>
                  <img
                    className="2xl:w-6 2xl:ml-1 2xl:mb-0.5"
                    src={admin}
                    alt="admin"
                  />
                </div>
                <p className="text-gre 2xl:text-1.5xl 3xl:text-2xl pl-1 pr-2">
                  Jeet Kaushik
                </p>
              </div>
            </div>
            <div className="text-white text-right">
              <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl pb-4 2xl:pb-9 3xl:pb-7">
                Score
              </h1>
              <p className="text-4xl 2xl:text-5.5xl 3xl:text-6xl pt-1">
                {user.score}
              </p>
            </div>
          </div>
          <div className="font-dm font-bold text-white pt-20 2xl:pt-32">
            <h1 className="text-3xl 2xl:text-4.5xl 3xl:text-5xl">
              My Submissions
            </h1>
            <Submissions />
            {/* {users.submissions > 0 ? (
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
            )} */}
          </div>
        </>
      ))}
    </div>
  );
};

export default Overview;
