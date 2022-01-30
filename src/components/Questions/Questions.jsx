/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import { getPeople } from "../../redux/PostTeam/postTeamActions";
const Questions = () => {
  const dispatch = useDispatch();
  console.log("Questions");
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      console.log(res.data);
      dispatch(getPeople(res.data));
    });
  }, []);
  return (
    <div>
      <h1 className="text-black">Questions</h1>
    </div>
  );
};

export default Questions;
