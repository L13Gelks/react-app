import "./App.css";
import AutoScrollGallery from "./javascript/components/AutoScrollGallery";
import NavBar from "./javascript/components/NavBar";
import SlidingInfo from "./javascript/components/SlidingInfo";
import Scene from "./javascript/components/Scene";

import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  return (
    <div>
      <NavBar />
    </div>
  );
}

export default App;
