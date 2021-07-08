import React from "react";
import { Link } from "react-router-dom";

function Protected() {
  return (
    <div>
      <h1>Protected Page</h1>
      <Link to="/">Back to home</Link>
    </div>
  );
}

export default Protected;
