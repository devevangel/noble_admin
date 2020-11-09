import React from "react";
import "./navBar.css";
import { Link, withRouter } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbar10"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="container">
        <div className="navbar-collapse collapse" id="navbar10">
          <ul className="navbar-nav nav-fill w-100">
            <li className="nav-item">
              <Link className="grow nav-link" to="/">
                TechStack
              </Link>
            </li>
            <li className="nav-item">
              <Link className="grow nav-link" to="/experience">
                Experience
              </Link>
            </li>
            <li className="nav-item">
              <Link className="grow nav-link" to="/projects">
                Projects
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default withRouter(NavBar);
