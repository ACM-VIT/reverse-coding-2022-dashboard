import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Questions from "./components/Questions/Ques";
import "./App.css";
import Sidebar from "./components/Sidebar/Sidebar";

class App extends Component {
  render() {
    return (
      <div>
        <div className=" md:ml-64">
          <Switch>
            <>
              <Sidebar />
              <Route exact path="/questions" component={Questions} />
            </>
          </Switch>
        </div>
      </div>
    );
  }
}
export default App;
