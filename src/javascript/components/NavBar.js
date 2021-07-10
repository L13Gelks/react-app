import "../../css/NavBar.css";
import Account from "./Account";
import MagiClock from "./MagiClock";
import Home from "../../home";
import About from "../../about";

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div>
      <Router>
        <header>
          <Link to="/account">Account</Link>
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
          <Route path="/account">
            <Account />
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
