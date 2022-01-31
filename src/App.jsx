import React, { Component } from "react";

import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Overview from "./containers/Overview/Overview";
import Questions from "./components/Questions/Questions";
import Ques from "./components/Questions/Ques";
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
            <Route exact path="/" component={Questions} />
            <Route exact path="/overview" component={Overview} />
            <Route exact path="/questions" component={Ques} />
            <Route exact path="/leaderboard" component={Leaderboard} />
            <Route exact path="/faq" component={Faq} />
          </>
        </Switch>
      </div>
    </Provider>
  </div>
);
export default App;
