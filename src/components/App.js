import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoadingBar from "react-redux-loading";

import Home from "./Home";
import Login from "./Login";
import Protected from "./Protected";

// Redux action
import { userLogout, loadUser } from "../actions/auth";

function App({ auth, dummyAction, userLogout, loadUser }) {
  useEffect(() => {
    loadUser();
  }, [dummyAction, loadUser]);

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={() => {
          return auth.isAuthenticated === true ? (
            children
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    );
  };

  return (
    <>
      <LoadingBar />
      {!auth.loading && (
        <>
          <Router>
            <Switch>
              <Route exact path="/login" component={Login} />
              <Route exact path="/" component={Home} />
              <PrivateRoute path="/protected">
                <Protected />
              </PrivateRoute>
            </Switch>
          </Router>
          {auth.isAuthenticated && (
            <div>
              <br />
              <button onClick={userLogout}>Logout</button>
            </div>
          )}
        </>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { userLogout, loadUser })(App);
