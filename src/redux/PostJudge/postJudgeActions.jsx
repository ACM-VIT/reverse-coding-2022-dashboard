/* eslint-disable import/prefer-default-export */
import axios from "axios";
import { toast } from "react-toastify";
import {
  POST_FILE,
  // CASE_ONE,
  // CASE_TWO,
  // CASE_THREE,
  // CASE_FOUR,
  // CASE_FIVE,
  JUDGE_MAIN,
  CLEAR_ALL,
  SET_DISABLE,
  TASK_RUNNER,
  SET_LOADING,
  SET_TRUE,
  GET_ASSIGNED,
} from "./postJudgeTypes";

// export const caseOne = (stateone) => ({
//   type: CASE_ONE,
//   payload: stateone,
// });
// export const caseTwo = (statetwo) => ({
//   type: CASE_TWO,
//   payload: statetwo,
// });
// export const caseThree = (statethree) => ({
//   type: CASE_THREE,
//   payload: statethree,
// });
// export const caseFour = (statefour) => ({
//   type: CASE_FOUR,
//   payload: statefour,
// });
// export const caseFive = (statefive) => ({
//   type: CASE_FIVE,
//   payload: statefive,
// });
export const postTrial = (judge) => ({
  type: POST_FILE,
  payload: judge,
});
export const judgeMain = (obj) => ({
  type: JUDGE_MAIN,
  payload: obj,
});

export const clearAll = () => ({
  type: CLEAR_ALL,
});
export const setDisable = (bool) => ({
  type: SET_DISABLE,
  payload: bool,
});
export const taskRunner = (obj) => ({
  type: TASK_RUNNER,
  payload: obj,
});
export const setLoading = (bool) => ({
  type: SET_LOADING,
  payload: bool,
});
export const setTrue = (bool) => ({
  type: SET_TRUE,
  payload: bool,
});
export const getAssigned = (assigned) => ({
  type: GET_ASSIGNED,
  payload: assigned,
});
export const postRoullete = (idroulette) => (dispatch) => {
  const WT = sessionStorage.getItem("WT");
  axios
    .post(
      `${process.env.REACT_APP_BASEURL}/teams/problems`,
      {
        problemID: idroulette,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${WT}`,
        },
      }
    )
    .then((res) => {
      console.log(res.data);
      axios
        .get(`${process.env.REACT_APP_BASEURL}/teams/getassignedproblems`, {
          headers: {
            "Content-Type": "application/json",
            authorization: `Bearer ${WT}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          dispatch(getAssigned(response.data));
        })
        .catch((err) => {
          console.log(err);
        });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const postTask = (input, id) => (dispatch) => {
  dispatch(setDisable(true));
  dispatch(setLoading(true));
  const WT = sessionStorage.getItem("WT");
  let inputData = input.toString();
  if (inputData.endsWith("\n") === false) {
    inputData += "\n";
  }

  axios
    .post(
      `${process.env.REACT_APP_BASEURL}/runner`,
      {
        id: id,
        input: inputData,
      },
      {
        headers: {
          "Content-Type": "application/json",
          authorization: `Bearer ${WT}`,
        },
      }
    )
    .then((res) => {
      dispatch(setDisable(false));
      dispatch(setLoading(false));
      // console.log("response runner", res);
      let result = res.data;
      result = result.toString().replace(/\n\r?/g, "<br />");
      dispatch(taskRunner(result));
    })
    .catch((err) => {
      dispatch(setDisable(false));
      dispatch(setLoading(false));
      // console.log("runner", err);
      toast.error("Error. Please try again");
    });
};

export const postJudge =
  (problemid, getTeamid, fileType, downloadFile) => (dispatch) => {
    dispatch(setDisable(true));
    dispatch(setLoading(true));
    const TK = sessionStorage.getItem("TK");
    // const TK = sessionStorage.getItem("TK");
    const WT = sessionStorage.getItem("WT");
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
            authorization: `Bearer ${WT}`,
          },
        }
      )
      .then(async (res) => {
        dispatch(setLoading(false));
        toast.success("Running Test Cases");
        // console.log(res);
        // let runafter4 = 0;
        const polling = await setInterval(() => {
          axios
            .get(`${process.env.REACT_APP_BASEURL}/judge/${res.data}`, {
              headers: {
                "Content-Type": "application/json",
                authorization: `Bearer ${WT}`,
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
              if (
                response.data.testCase[0].state >= 3 &&
                response.data.testCase[1].state >= 3 &&
                response.data.testCase[2].state >= 3 &&
                response.data.testCase[3].state >= 3 &&
                response.data.testCase[4].state >= 3
              ) {
                // runafter4 += 1;
                // console.log("RUNAFTER4", runafter4);
                const objfinal = {};
                response.data.testCase.forEach((testCase) => {
                  objfinal[testCase.testCaseNumber] = testCase.state;
                  // console.log("final", testCase);
                  // console.log("objfinal", objfinal);
                });
                // if (runafter4 === 5 || response.data.returned_testcases === 5) {
                //   console.log(WT);
                // axios
                //   .get(`${process.env.REACT_APP_BASEURL}/judge`, {
                //     headers: {
                //       "Content-Type": "application/json",
                //       authorization: `Bearer ${WT}`,
                //     },
                //   })
                //   .then((responsepoints) => {
                //     console.log("after poll", responsepoints.data);
                //     objfinal.points = responsepoints.data;
                //   })
                //   .catch((err) => {
                //     console.log("after poll", err);
                //     objfinal.points = response.data.points;
                //   });
                objfinal.points = response.data.points;
                dispatch(setTrue(true));
                dispatch(setDisable(false));
                dispatch(judgeMain(objfinal));
                clearInterval(polling);
                // }
              } else {
                const obj = {};
                // console.log("done:", response.data.returned_testcases);
                response.data.testCase.forEach((testCase) => {
                  obj[testCase.testCaseNumber] = testCase.state;
                  // console.log("Test CAse:", testCase.testCaseNumber);
                  // console.log("state:", testCase.state);
                });
                // console.log("obj:", obj);
                dispatch(judgeMain(obj));
              }
            });
        }, 3000);
        // axios.get
      })
      .catch((err) => {
        dispatch(setDisable(false));
        dispatch(setLoading(false));
        console.log(err);
        toast.error("Error in running test cases. Please try again");
      });
  };

// export const createTeam = (team) => (dispatch) => {
//     // axios post to create team
//     const WT = sessionStorage.getItem("WT");
//     axios
//       .post(
//         `${url.SERVER_BASEURL}/participants/create-team`,
//         {
//           name: team,
//         },
//         {
//           headers: {
//             "content-type": "application/json",
//             authorization: `Bearer ${WT}`,
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
