/* eslint-disable import/prefer-default-export */
import axios from "axios";
import {
  POST_FILE,
  CASE_ONE,
  CASE_TWO,
  CASE_THREE,
  CASE_FOUR,
  CASE_FIVE,
  JUDGE_MAIN,
} from "./postJudgeTypes";

export const caseOne = (stateone) => ({
  type: CASE_ONE,
  payload: stateone,
});
export const caseTwo = (statetwo) => ({
  type: CASE_TWO,
  payload: statetwo,
});
export const caseThree = (statethree) => ({
  type: CASE_THREE,
  payload: statethree,
});
export const caseFour = (statefour) => ({
  type: CASE_FOUR,
  payload: statefour,
});
export const caseFive = (statefive) => ({
  type: CASE_FIVE,
  payload: statefive,
});
export const postTrial = (judge) => ({
  type: POST_FILE,
  payload: judge,
});
export const judgeMain = (obj) => ({
  type: JUDGE_MAIN,
  payload: obj,
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
        `${process.env.REACT_APP_BASEURL}/judge`,
        {
          problemID: problemid,
          teamID: getTeamid,
          language: fileType,
          code: downloadFile,
        },
        {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${TK}`,
          },
        }
      )
      .then((res) => {
        console.log(res);
        const polling = setInterval(() => {
          axios
            .get(`${process.env.REACT_APP_BASEURL}/judge/${res.data}`, {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${TK}`,
              },
            })
            .then((response) => {
              // response.data.testCase.forEach((testCase) => {
              //   console.log(testCase);
              //   if (testCase.state === 6) {
              //     clearInterval(polling);
              //     dispatch(postTrial(res.data));
              //   }
              // });
              // response.data.testCase.every((testCase) => {
              //   console.log(testCase);
              //   if (testCase.state === 6) {
              //     clearInterval(polling);
              //     dispatch(postTrial(res.data));
              //   }
              //   return false;
              // });
              // if (response.data.returned_testcases >= 5) {
              //   response.data.testCase.forEach((testCase) => {
              //     console.log("final", testCase);
              //   });
              //   clearInterval(polling);
              // } else {
              //   console.log("done:", response.data.returned_testcases);
              //   response.data.testCase.forEach((testCase) => {
              //     // if (testCase.testCaseNumber === 1) {
              //     //   console.log("case1", testCase);
              //     //   dispatch(caseOne(testCase.state));
              //     // } else if (testCase.testCaseNumber === 2) {
              //     //   console.log("case2", testCase);
              //     //   dispatch(caseTwo(testCase.state));
              //     // } else if (testCase.testCaseNumber === 3) {
              //     //   console.log("case3", testCase);
              //     //   dispatch(caseThree(testCase.state));
              //     // } else if (testCase.testCaseNumber === 4) {
              //     //   console.log("case4", testCase);
              //     //   dispatch(caseFour(testCase.state));
              //     // } else if (testCase.testCaseNumber === 5) {
              //     //   console.log("case5", testCase);
              //     //   dispatch(caseFive(testCase.state));
              //     // }
              //     console.log("Test CAse:", testCase.testCaseNumber);
              //     console.log("state:", testCase.state);
              //   });
              // }
              if (response.data.returned_testcases > 4) {
                const objfinal = {};
                response.data.testCase.forEach((testCase) => {
                  objfinal[testCase.testCaseNumber] = testCase.state;
                  console.log("final", testCase);
                  console.log("objfinal", objfinal);
                });
                objfinal.points = response.data.points;
                dispatch(judgeMain(objfinal));
                clearInterval(polling);
              } else {
                const obj = {};
                console.log("done:", response.data.returned_testcases);
                response.data.testCase.forEach((testCase) => {
                  obj[testCase.testCaseNumber] = testCase.state;
                  console.log("Test CAse:", testCase.testCaseNumber);
                  console.log("state:", testCase.state);
                });
                console.log("obj:", obj);
                dispatch(judgeMain(obj));
              }
            });
        }, 10000);
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
