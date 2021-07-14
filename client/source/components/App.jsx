import React, { useState, useEffect, lazy, Suspense } from "react";
import GameController from "./GameController.jsx";
// import Learn from "./Learn.jsx";

const LearnComponent = lazy(() => import("./Learn.jsx"));

const renderLoader = () => <p>Loading</p>;

const App = (props) => {
  const [view, setView] = useState("play");

  if (view === "play") {
    return (
      <>
        <div className="body">
          <div className="header">
            <div className="header-left">
              <div className="logo">
                <h1 className="logo-latin" onClick={(e) => setView("play")}>
                  Putonghua
                </h1>
                <h2 className="logo-hanzi" onClick={(e) => setView("play")}>
                  普通话
                </h2>
              </div>
              <div className="header-item" onClick={(e) => setView("play")}>
                Play
              </div>
              <div className="header-item" onClick={(e) => setView("learn")}>
                Learn
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
          <div className="app">
            <GameController />
          </div>
        </div>
        <img
          className="china-background"
          src="../../assets/china-background.png"
          alt="background-china-skyline"
        ></img>
      </>
    );
  } else if (view === "learn") {
    return (
      <div className="body">
        <div className="header">
          <div className="header-left">
            <div className="logo">
              <h1 className="logo-latin" onClick={(e) => setView("play")}>
                Putonghua
              </h1>
              <h2 className="logo-hanzi" onClick={(e) => setView("play")}>
                普通话
              </h2>
            </div>
            <div className="header-item" onClick={(e) => setView("play")}>
              Play
            </div>
            <div className="header-item" onClick={(e) => setView("learn")}>
              Learn
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
        <div className="app">
          <Suspense fallback={renderLoader()}>
            <LearnComponent className="learn" />
          </Suspense>
        </div>
      </div>
    );
  }
};

export default App;
