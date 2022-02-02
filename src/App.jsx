import React, { useState, useEffect } from "react";

import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import Overview from "./containers/Overview/Overview";
import Questionsdemo from "./components/Questions/DemoQuestions";
import QuestionsMain from "./containers/QuestionsContainer/QuestionMain/Questions";
import Faq from "./components/Faq/Faq";
import useWindowSize from "./utils";

import "./App.css";

import Sidebar from "./components/Sidebar/Sidebar";
import Leaderboard from "./containers/LeaderboardContainer/Leaderboard";
import LargeScreen from "./containers/LargeScreen/LargeScreen";
import store from "./redux/store";

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
};
export default App;
