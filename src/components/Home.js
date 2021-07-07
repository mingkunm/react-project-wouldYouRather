import React from "react";
import { connect } from "react-redux";

function Home({ redux }) {
  return (
    <div>
      <h1>React Redux starter demo</h1>
      <h1>{redux[0]}</h1>
    </div>
  );
}

function mapStateToProps(state, ownProps) {
  console.log(ownProps);

  return {
    redux: state.dummyReducer,
    // greeting: ownProps.greeting,
  };
}

export default connect(mapStateToProps, null)(Home);
