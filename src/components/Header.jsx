import React, { useContext } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { UserContext } from "../App";
function Header({ setReset }) {
  const user = useContext(UserContext);

  const clickLoginHandler = () => {
    user.setUser("grumpy19");
  };
  const clickLogoutHandler = () => {
    user.setUser("");
  };
  return (
    <div className="header-container">
      <header>
        <img src={logo} alt="Nc news logo"></img>
        <h1>NC News</h1>
        <nav>
          <Link
            onClick={() => {
              setReset(true);
            }}
            className="nav-link"
            to={"/"}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setReset(true);
            }}
            to={"/topics/coding"}
            className="nav-link"
          >
            Coding
          </Link>
          <Link
            onClick={() => {
              setReset(true);
            }}
            to={"/topics/football"}
            className="nav-link"
          >
            Football
          </Link>
          <Link
            onClick={() => {
              setReset(true);
            }}
            to={"/topics/cooking"}
            className="nav-link"
          >
            Cooking
          </Link>
        </nav>
      </header>
      <div className="login-box">
        {!user.user && (
          <button onClick={clickLoginHandler} className="btn">
            Sign in
          </button>
        )}
        {user.user && <p>Welcome {user.user}</p>}
        {user.user && (
          <button onClick={clickLogoutHandler} className="btn">
            Log out
          </button>
        )}
      </div>
    </div>
  );
}

export default Header;
