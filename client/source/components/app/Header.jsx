import React, { useState, useEffect, lazy, Suspense } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams,
} from "react-router-dom";

const renderLoader = () => <p>Loading</p>;

const Header = (props) => {
  return (
    <Router>
      <div className="header">
        <div className="header-left">
          <div className="logo">
            <h1
              className="logo-latin"
              onClick={(e) => props.updateView("play")}
            >
              <Suspense fallback={renderLoader()}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#333333" }}
                >
                  Putonghua
                </Link>
              </Suspense>
            </h1>
            <h2
              className="logo-hanzi"
              onClick={(e) => props.updateView("play")}
            >
              <Suspense fallback={renderLoader()}>
                <Link
                  to="/"
                  style={{ textDecoration: "none", color: "#333333" }}
                >
                  普通话
                </Link>
              </Suspense>
            </h2>
          </div>
          <div
            className="header-item"
            onClick={(e) => props.updateView("play")}
          >
            <Suspense fallback={renderLoader()}>
              <Link to="/" style={{ textDecoration: "none", color: "#333333" }}>
                Play
              </Link>
            </Suspense>
          </div>
          <div
            className="header-item"
            onClick={(e) => props.updateView("learn")}
          >
            <Suspense fallback={renderLoader()}>
              <Link
                to="/learn"
                style={{ textDecoration: "none", color: "#333333" }}
              >
                Learn
              </Link>
            </Suspense>
          </div>
        </div>
        <div className="header-right">
          <img
            className="lantern"
            src="../../assets/lantern.png"
            alt="chinese-lantern"
          ></img>
        </div>
      </div>
    </Router>
  );
};

export default Header;
