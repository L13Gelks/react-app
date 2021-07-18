import "../../css/SelectionWheel.css";

import { useEffect, useState } from "react";

import React from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Axios from "axios";

import preview from "../../img/tmp/preview/gaming.jpg";
import preview2 from "../../img/tmp/preview/music.jpg";
import preview3 from "../../img/tmp/preview/programming.jpg";
import preview4 from "../../img/tmp/preview/anime.jpg";

import image from "../../img/tmp/wallpaper/gaming.jpg";
import image2 from "../../img/tmp/wallpaper/music.jpg";
import image3 from "../../img/tmp/wallpaper/programming.jpg";
import image4 from "../../img/tmp/wallpaper/anime.jpg";

var vec = [];
vec.push(image);
vec.push(image2);
vec.push(image3);
vec.push(image4);

const SelectionWheel = () => {
  const [backgroundIndex, setBackgroundIndex] = useState(null);
  const [background, setBackground] = useState([]);
  const [discState, setDiscState] = useState(true);

  useEffect(() => {
    setBackground(vec);
  }, []);
  const changeNoneImage = () => {
    if (discState) {
      setBackgroundIndex(null);
    }
  };
  const changeFirstImage = () => {
    if (discState) {
      setBackgroundIndex(0);
      setDiscState(false);
    }
  };
  const changeSecondImage = () => {
    if (discState) {
      setBackgroundIndex(1);
      setDiscState(false);
    }
  };
  const changeThirdImage = () => {
    if (discState) {
      setBackgroundIndex(2);
      setDiscState(false);
    }
  };
  const changeFourthImage = () => {
    if (discState) {
      setBackgroundIndex(3);
      setDiscState(false);
    }
  };
  const changeState = () => {
    setDiscState(true);
  };

  return (
    <div
      className="background"
      style={{ backgroundImage: `url(${background[backgroundIndex]})` }}
    >
      <div
        className={discState ? "wheel-container-default" : "wheel-container "}
        onClick={discState ? "" : changeState}
      >
        <div
          className={
            discState
              ? "selection-wheel-background-default"
              : "selection-wheel-background"
          }
        >
          <div
            className="selection-wheel-top"
            onClick={changeFirstImage}
            onMouseLeave={changeNoneImage}
          >
            <img src={preview} alt="" />
          </div>
          <div
            className="selection-wheel-bottom"
            onClick={changeSecondImage}
            onMouseLeave={changeNoneImage}
          >
            <img src={preview2} alt="" />
          </div>
          <div
            className="selection-wheel-left"
            onClick={changeThirdImage}
            onMouseLeave={changeNoneImage}
          >
            <img src={preview3} alt="" />
          </div>
          <div
            className="selection-wheel-right"
            onClick={changeFourthImage}
            onMouseLeave={changeNoneImage}
          >
            <img src={preview4} alt="" />
          </div>
          <div className="inner-wheel-wrapper">
            <div className="inner-wheel-top"></div>
            <div className="inner-wheel-bottom"></div>
            <div className="inner-wheel-left"></div>
            <div className="inner-wheel-right"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SelectionWheel;
