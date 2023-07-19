import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
function Header() {
  return (
    <header>
      <img src={logo} alt="Nc news logo"></img>
      <h1>NC News</h1>
      <nav>
        <Link className="nav-link" to={"/"}>
          Home
        </Link>
        <Link className="nav-link">Topics</Link>
      </nav>
    </header>
  );
}

export default Header;
