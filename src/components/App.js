import React, { useEffect } from "react";
import { connect } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from "react-redux-loading";

import Home from "./Home";

// Redux action
import { dummyAction } from "../actions/action";

function App({ dummyAction }) {
  useEffect(() => {
    dummyAction();
  }, [dummyAction]);

  return (
    <>
      <LoadingBar />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default connect(null, { dummyAction })(App);
