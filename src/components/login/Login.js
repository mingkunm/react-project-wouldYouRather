import React, { useEffect } from "react";
import { connect } from "react-redux";
import { useHistory, Link, useLocation } from "react-router-dom";

import { userLogin } from "../../actions/auth";

function Login({ auth, userLogin }) {
  const history = useHistory();

  const { state } = useLocation();

  useEffect(() => {
    if (auth.isAuthenticated) {
      state ? history.push(state.from) : history.push("/");
    }
  }, [auth.isAuthenticated, state, history]);

  return (
    <>
      <h1>Login Component</h1>
      <div>
        <Link to="/">Back to home</Link>
      </div>
      <br />
      <button onClick={userLogin}>Login</button>
    </>
  );
}

function mapStateToProps(state) {
  return {
    auth: state.auth,
  };
}

export default connect(mapStateToProps, { userLogin })(Login);
