import "../../css/MagiClock.css";
import React, { Component, useEffect, useState } from "react";

const MagiClock = ({ showClock }) => {
  const [sec, setSec] = useState(0);
  const [min, setMin] = useState(0);
  const [hour, setHour] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      var date = new Date();
      var hour = date.getHours();
      var mins = date.getMinutes();
      var secs = date.getSeconds();

      var newHour = "0";
      var newMin = "0";
      var newSec = "0";

      if (secs < 10) {
        newSec = "0" + secs.toString();
      } else {
        newSec = secs.toString();
      }

      if (mins < 10) {
        newMin = "0" + mins.toString();
      } else {
        newMin = mins.toString();
      }

      if (hour < 10) {
        newHour = "0" + hour.toString();
      } else {
        newHour = hour.toString();
      }

      setHour(newHour);
      setMin(newMin);
      setSec(newSec);

      var span = document.querySelectorAll("span")[0];
      span.setAttribute("hour-value", newHour);
      var span = document.querySelectorAll("span")[2];
      span.setAttribute("min-value", newMin);
      var span = document.querySelectorAll("span")[4];
      span.setAttribute("sec-value", newSec);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="section">
      <div class="neon-wrapper">
        <span class="hour" id="hour">
          {hour}
        </span>
        <span class="col">:</span>
        <span class="min" id="min">
          {min}
        </span>
        <span class="col">:</span>
        <span class="sec" id="sec">
          {sec}
        </span>
        <span class="gradient"></span>
        <span class="dodge"></span>
      </div>
    </section>
  );
};

export default MagiClock;
