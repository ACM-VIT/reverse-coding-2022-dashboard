import React, { useState, useEffect } from "react";

import { Route, Switch, Redirect } from "react-router-dom";
import { Provider } from "react-redux";
import Overview from "./containers/Overview/Overview";
import Questionsdemo from "./components/Questions/DemoQuestions";
import QuestionsMain from "./containers/QuestionsContainer/QuestionMain/Questions";
import Faq from "./components/Faq/Faq";
import useWindowSize from "./utils";

import "./App.css";

import Login from "./components/Login/Login";
import Sidebar from "./components/Sidebar/Sidebar";
import Leaderboard from "./containers/LeaderboardContainer/Leaderboard";
import LargeScreen from "./containers/LargeScreen/LargeScreen";
import store from "./redux/store";
import NotFound404 from "./components/404/404";

const App = () => {
  const size = useWindowSize();
  const [displayWidth, setDisplayWidth] = useState(size.width);
  useEffect(() => {
    setDisplayWidth(size.width);
  }, [size]);

  if (displayWidth < 1280) {
    return <LargeScreen />;
  }
  return (
    <Provider store={store}>
      <Switch>
        <Route exact path="/">
          <Redirect exact from="/" to="/" />
          <Sidebar />
          <Questionsdemo />
        </Route>
        <Route exact path="/overview">
          <Redirect exact from="/" to="/" />
          <Sidebar />
          <Overview />
        </Route>
        <Route exact path="/questions">
          <Redirect exact from="/" to="/" />
          <Sidebar />
          <QuestionsMain />
        </Route>
        <Route exact path="/leaderboard">
          <Redirect exact from="/" to="/" />
          <Sidebar />
          <Leaderboard />
        </Route>
        <Route exact path="/faq">
          <Redirect exact from="/" to="/" />
          <Sidebar />
          <Faq />
        </Route>
        <Route exact path="/login" component={Login} />
        <Route path="*" component={NotFound404} />
      </Switch>
    </Provider>
  );
};
export default App;
