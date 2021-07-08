import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>React Redux starter demo</h1>
      <Link to="/protected">Protected Page</Link>
    </>
  );
}

export default Home;
