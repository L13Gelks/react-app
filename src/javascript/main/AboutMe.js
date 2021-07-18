import "../../css/AboutMe.css";

import SelectionWheel from "./SelectionWheel";

import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from "axios";

const AboutMe = () => {
  return (
    <div className="about-me-background">
      <SelectionWheel />
    </div>
  );
};

export default AboutMe;
