import "../../css/NavBar.css";
import { useEffect, useState } from "react";
import Account from "./Account";
import ProfilePicture from "./ProfilePicture";
import MagiClock from "./MagiClock";
import Home from "../../home";
import About from "../../about";
import AboutMe from "../main/AboutMe";

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from "axios";

const NavBar = () => {
  const [accountName, setAccountName] = useState("Account");
  const [showClock, setShowClock] = useState(false);

  useEffect(() => {
    Axios.get("http://localhost:3001/user-icon").then((response) => {
      if (response.data.loggedIn == true) {
        setAccountName(response.data.user[0].name);
      } else {
        setAccountName("Account");
      }
    });
  }, []);

  const showClockFunction = () => {
    setShowClock((prev) => !prev);
  };

  return (
    <div>
      <Router>
        <header>
          <Link id="my-profile-link" to="/account">
            <ProfilePicture />
            {accountName}
          </Link>
          <nav>
            <ul class="nav_links">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
          {showClock ? (
            <button id="clockToggler" onClick={showClockFunction}>
              <MagiClock showClock={showClock} />
            </button>
          ) : (
            <button id="clockToggler" onClick={showClockFunction}>
              Clock
            </button>
          )}
        </header>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/account">
            <Account />
          </Route>
          <Route exact path="/about-me">
            <AboutMe />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
