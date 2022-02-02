/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { POST_FILE } from "./postJudgeTypes";

export const postTrial = (judge) => ({
  type: POST_FILE,
  payload: judge,
});

export const postJudge =
  (problemid, getTeamid, fileType, downloadFile) => (dispatch) => {
    console.log("problemid", problemid);
    console.log("getTeamid", getTeamid);
    console.log("fileType", fileType);
    console.log("downloadFile", downloadFile);
    const TK = sessionStorage.getItem("TK");
    axios
      .post(
        "http://20.204.89.226:5000/judge",
        {
          problemID: problemid,
          teamID: getTeamid,
          language: fileType,
          code: downloadFile,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJwYXJ0aWNpcGFudCI6eyJpZCI6MzUsImdvb2dsZUlEIjoiMTE1MDAzOTM2NjM3MDg0NjEwNTkwIiwibmFtZSI6IlByYW5hdiBEZXNhaSIsImlzQWRtaW4iOnRydWUsImVtYWlsIjoicHJhbmF2ZGVzYWkucHNkQGdtYWlsLmNvbSIsInRlYW1faWQiOjE1MjZ9LCJpYXQiOjE2NDM4MTQ3OTQsImV4cCI6MTY1MjQ1NDc5NCwiaXNzIjoiaGVwaGFlc3R1cyJ9.nrLHJlPnEZHIaU29bw5XtG4ywQ7R_0PPWUDLFK4vA6I`,
          },
        }
      )
      .then((res) => {
        const polling = setInterval(() => {
          axios.get("http://20.204.89.226:5000/judge").then((response) => {
            if (response.data.status === "done") {
              clearInterval(polling);
              dispatch(postTrial(res.data));
            }
          });
        }, 1000);
      })
      .catch((err) => {
        console.log(err);
      });
  };

// export const createTeam = (team) => (dispatch) => {
//     // axios post to create team
//     const TK = sessionStorage.getItem("TK");
//     axios
//       .post(
//         `${url.SERVER_BASEURL}/participants/create-team`,
//         {
//           name: team,
//         },
//         {
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${TK}`,
//           },
//         }
//       )
//       .then((res) => {
//         toast.success("Team Created Successfully");
//         dispatch(createTeamSuccess(res.data.teamCode));
//       })
//       .catch((err) => {
//         if (team.length < 6) {
//           toast.error("Team name cannot be less than 6 characters");
//         } else if (team.length > 25) {
//           toast.error("Team name cannot be more than 25 characters");
//         } else if (
//           err.response.data.message.toString() ===
//           "name must match /^[a-zA-Z0-9_]+( [a-zA-Z0-9_]+)*$/ regular expression"
//         ) {
//           toast.error(
//             "Team name can only contain alphabets, numbers, space and underscore."
//           );
//         } else if (
//           err.response.data.message.toString() === "TeamName already exists"
//         ) {
//           toast.error("Team name you entered already exists.");
//         } else {
//           toast.error(err.response.data.message.toString());
//         }
//         dispatch(createTeamFailure(err));
//       });
//   };
