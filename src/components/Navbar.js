import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-11">
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/home">
                TEAM-70
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
              >
                <span className="navbar-toggler-icon"></span>
              </button>

              <div
                className=" collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link
                      className="nav-link active"
                      to="/home"
                    >
                      Home
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">
                      About
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/contact">
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
