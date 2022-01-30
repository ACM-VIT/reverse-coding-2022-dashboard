import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Overview from "./containers/Overview/Overview";
import Questions from "./components/Questions/Questions";
import Sidebar from "./components/Sidebar/Sidebar";

import "./App.css";
class App extends Component {
  render() {
    return (
      <div>
        <div className=" md:ml-64">
          <Switch>
            <>
              <Sidebar />
              <Route exact path="/overview" component={Overview} />
              <Route exact path="/questions" component={Questions} />
            </>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
