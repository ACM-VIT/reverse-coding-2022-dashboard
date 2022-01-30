import React, { Component } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";

import Questions from "./components/Questions/Questions";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";
import store from "./redux/store";
import Overview from "./components/LeaderBoard/Overview";

const App = () => (
  <div>
    <Provider store={store}>
      <div className=" md:ml-64">
        <Switch>
          <>
            <Redirect exact from="/" to="/overview" />
            <Sidebar />
            <Route exact path="/questions" component={Overview} />
            <Route exact path="/overview" component={Questions} />
          </>
        </Switch>
      </div>
    </Provider>
  </div>
);
export default App;
