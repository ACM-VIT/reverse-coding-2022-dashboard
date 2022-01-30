import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Overview from "./containers/Overview/Overview";
import Questions from "./components/Questions/Questions";
import Faq from "./components/Faq/Faq";
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
              <Route exact path="/overview" component={Overview} />
              <Route exact path="/questions" component={Questions} />
              <Route exact path="/faq" component={Faq} />
            </>
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
