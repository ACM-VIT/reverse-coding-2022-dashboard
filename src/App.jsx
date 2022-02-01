import React, { Component } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Overview from "./containers/Overview/Overview";
import Questionsdemo from "./components/Questions/DemoQuestions";
import QuestionsMain from "./containers/QuestionsContainer/QuestionMain/Questions";
import Faq from "./components/Faq/Faq";
import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Leaderboard from "./containers/LeaderboardContainer/Leaderboard";
import store from "./redux/store";
// import Overview from "./components/LeaderBoard/Overview";

const App = () => (
  <div>
    <Provider store={store}>
      <div className=" md:ml-64">
        <Switch>
          <>
            {/* <Redirect exact from="/" to="/overview" /> */}
            <Sidebar />
            {/* <Route exact path="/questions" component={Overview} /> */}
            <Route exact path="/" component={Questionsdemo} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/questions" component={QuestionsMain} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/faq" component={Faq} />
          </>
        </Switch>
      </div>
    </Provider>
  </div>
);
export default App;
