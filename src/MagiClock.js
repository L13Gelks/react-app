import "./css/MagiClock.css";

setInterval(function () {
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

  document.getElementById("hour").innerHTML = newHour;
  document.getElementById("min").innerHTML = newMin;
  document.getElementById("sec").innerHTML = newSec;

  var span = document.querySelectorAll("span")[0];
  span.setAttribute("hour-value", newHour);
  var span = document.querySelectorAll("span")[2];
  span.setAttribute("min-value", newMin);
  var span = document.querySelectorAll("span")[4];
  span.setAttribute("sec-value", newSec);
}, 1000);

const MagiClock = () => {
  return (
    <section id="section">
      <div class="neon-wrapper">
        <span class="hour" id="hour">
          00
        </span>
        <span class="col">:</span>
        <span class="min" id="min">
          00
        </span>
        <span class="col">:</span>
        <span class="sec" id="sec">
          00
        </span>
        <span class="gradient"></span>
        <span class="dodge"></span>
      </div>
    </section>
  );
};

export default MagiClock;
