// /* eslint-disable react/function-component-definition */
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useDispatch } from "react-redux";

// import {
//   getPeople,
//   getProblems,
//   getTeams,
//   getLeaderboard,
//   getJudgePoints,
// } from "../../redux/GetAll/GetAllActions";
// const Questionsdemo = () => {
//   const dispatch = useDispatch();
//   console.log("Questions");
//   useEffect(async () => {
//     // axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
//     //   console.log(res.data);
//     //   dispatch(getPeople(res.data));
//     // });
//     await axios
//       .get(process.env.REACT_APP_GET_TEAM, {
//         headers: {
//           "Content-Type": "application/json",
//           authorization: `Bearer TK`,
//         },
//       })
//       .then(async (responseteams) => {
//         console.log("teams", responseteams);
//         dispatch(getTeams(responseteams.data));
//         await axios
//           .get(process.env.REACT_APP_GET_PROBLEMS, {
//             headers: {
//               "Content-Type": "application/json",
//               authorization: `Bearer TK`,
//             },
//           })
//           .then(async (responseproblems) => {
//             console.log("problems", responseproblems);
//             dispatch(getProblems(responseproblems.data));
//             await axios
//               .get(process.env.REACT_APP_GET_JUDGE, {
//                 headers: {
//                   "Content-Type": "application/json",
//                   authorization: `Bearer TK`,
//                 },
//               })
//               .then(async (responsejudge) => {
//                 console.log("leaderboard", responsejudge);
//                 dispatch(getJudgePoints(responsejudge.data));
//                 await axios
//                   .get(process.env.REACT_APP_GET_LEADERBOARD, {
//                     headers: {
//                       "Content-Type": "application/json",
//                       authorization: `Bearer TK`,
//                     },
//                   })
//                   .then((responseleaderboard) => {
//                     console.log("leaderboard", responseleaderboard);
//                     dispatch(getLeaderboard(responseleaderboard.data));
//                   })
//                   .catch((err) => {
//                     console.log(err);
//                   });
//               })
//               .catch((err) => {
//                 console.log(err);
//               });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       })
//       .catch((err) => {
//         console.log("err", err);
//       });
//   }, []);
//   return (
//     <div>
//       <h1 className="text-black">Questions</h1>
//     </div>
//   );
// };

// export default Questionsdemo;
