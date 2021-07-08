import "../../css/NavBar.css";
import MagiClock from "./MagiClock";
import logo from "../../img/icons/icon.png";
import Home from "../../home";
import About from "../../about";

import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Router>
        <header>
          <img class="logo" src={logo} alt="logo" />
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
          <MagiClock />
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
};

export default NavBar;
