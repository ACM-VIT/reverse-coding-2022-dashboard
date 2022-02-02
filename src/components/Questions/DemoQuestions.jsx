/* eslint-disable react/function-component-definition */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useDispatch } from "react-redux";

import {
  getPeople,
  getProblems,
  getTeams,
} from "../../redux/GetAll/GetAllActions";
const Questionsdemo = () => {
  const dispatch = useDispatch();
  console.log("Questions");
  useEffect(() => {
    // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
    //   console.log(res.data);
    //   dispatch(getPeople(res.data));
    // });
    axios
      .get("http://20.204.89.226:5000/participants", {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0aWNpcGFudCI6eyJpZCI6MzUsImdvb2dsZUlEIjoiMTE1MDAzOTM2NjM3MDg0NjEwNTkwIiwibmFtZSI6IlByYW5hdiBEZXNhaSIsImlzQWRtaW4iOnRydWUsImVtYWlsIjoicHJhbmF2ZGVzYWkucHNkQGdtYWlsLmNvbSIsInRlYW1faWQiOjE1MjZ9LCJpYXQiOjE2NDM4MTQ3OTQsImV4cCI6MTY1MjQ1NDc5NCwiaXNzIjoiaGVwaGFlc3R1cyJ9.nrLHJlPnEZHIaU29bw5XtG4ywQ7R_0PPWUDLFK4vA6I`,
        },
      })
      .then((res) => {
        console.log("participant", res);
        axios
          .get("http://20.204.89.226:5000/teams", {
            headers: {
              "Content-Type": "application/json",
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0aWNpcGFudCI6eyJpZCI6MzUsImdvb2dsZUlEIjoiMTE1MDAzOTM2NjM3MDg0NjEwNTkwIiwibmFtZSI6IlByYW5hdiBEZXNhaSIsImlzQWRtaW4iOnRydWUsImVtYWlsIjoicHJhbmF2ZGVzYWkucHNkQGdtYWlsLmNvbSIsInRlYW1faWQiOjE1MjZ9LCJpYXQiOjE2NDM4MTQ3OTQsImV4cCI6MTY1MjQ1NDc5NCwiaXNzIjoiaGVwaGFlc3R1cyJ9.nrLHJlPnEZHIaU29bw5XtG4ywQ7R_0PPWUDLFK4vA6I`,
            },
          })
          .then((responseteams) => {
            console.log("teams", responseteams);
            axios
              .get("http://20.204.89.226:5000/problems", {
                headers: {
                  "Content-Type": "application/json",
                  authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0aWNpcGFudCI6eyJpZCI6MzUsImdvb2dsZUlEIjoiMTE1MDAzOTM2NjM3MDg0NjEwNTkwIiwibmFtZSI6IlByYW5hdiBEZXNhaSIsImlzQWRtaW4iOnRydWUsImVtYWlsIjoicHJhbmF2ZGVzYWkucHNkQGdtYWlsLmNvbSIsInRlYW1faWQiOjE1MjZ9LCJpYXQiOjE2NDM4MTQ3OTQsImV4cCI6MTY1MjQ1NDc5NCwiaXNzIjoiaGVwaGFlc3R1cyJ9.nrLHJlPnEZHIaU29bw5XtG4ywQ7R_0PPWUDLFK4vA6I`,
                },
              })
              .then((responseproblems) => {
                console.log("problems", responseproblems);
                dispatch(getProblems(responseproblems.data));
              })
              .catch((err) => {
                console.log(err);
              });
            dispatch(getTeams(responseteams.data));
          })
          .catch((err) => {
            console.log("err", err);
          });
        dispatch(getPeople(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <h1 className="text-black">Questions</h1>
    </div>
  );
};

export default Questionsdemo;
