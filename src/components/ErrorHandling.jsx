import React from "react";
import { Link } from "react-router-dom";

function ErrorHandling() {
  return (
    <div>
      <h1>Oops! You seem to be lost.</h1>
      <p>Here are some helpful links:</p>
      <div className="error-links">
        <Link to={"/"}>Home</Link>
        <Link to={"/topics/coding"}>Coding</Link>
        <Link to={"/topics/football"}>Football</Link>
        <Link to={"/topics/cooking"}>Cooking</Link>
      </div>
    </div>
  );
}

export default ErrorHandling;
