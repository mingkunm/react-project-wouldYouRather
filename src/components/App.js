import React, { useEffect } from "react";
import { connect } from "react-redux";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LoadingBar from "react-redux-loading";
import { ThemeProvider } from "@material-ui/core/styles";

// Components
import NavigationBar from "./navigationBar";
import Home from "./Home";
import Login from "./login";
import Protected from "./Protected";

// Material UI theme
import Theme from "../UI/theme";

// Redux action
import { userLogout, loadUser } from "../actions/auth";

function App({ auth, userLogout, loadUser }) {
  useEffect(() => {
    loadUser();
  }, [loadUser]);

  const PrivateRoute = ({ children, ...rest }) => {
    return (
      <Route
        {...rest}
        render={({ location }) => {
          return auth.isAuthenticated === true ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          );
        }}
      />
    );
  };

  return (
    <ThemeProvider theme={Theme}>
      <LoadingBar
        style={{ backgroundColor: "rgb(56, 224, 154)", height: "5px" }}
      />
      {!auth.loading && (
        <>
          <Router>
            <NavigationBar />
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
    </ThemeProvider>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { userLogout, loadUser })(App);
