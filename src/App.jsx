import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Overview from "./containers/Overview/Overview";
import Questions from "./components/Questions/Questions";
import Sidebar from "./components/Sidebar/Sidebar";
import Leaderboard from "./containers/LeaderboardContainer/Leaderboard";
import store from "./redux/store";
// import Overview from "./components/LeaderBoard/Overview";
import "./App.css";
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
            <Route exact path="/leaderboard" component={Leaderboard} />
          </>
        </Switch>
      </div>
    </Provider>
  </div>
);
export default App;
