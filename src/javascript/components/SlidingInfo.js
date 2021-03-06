import "../../css/SlidingInfo.css";
import img1 from "../../img/scroll/1.jpg";
import img2 from "../../img/scroll/2.jpg";
import img3 from "../../img/scroll/3.jpg";
import img4 from "../../img/scroll/4.jpg";

const SlidingInfo = () => {
  return (
    <div>
      <div class="slidershow middle">
        <div class="slides">
          <input type="radio" name="r" id="r1" defaultChecked />
          <input type="radio" name="r" id="r2" />
          <input type="radio" name="r" id="r3" />
          <input type="radio" name="r" id="r4" />
          <div class="slide s1">
            <img src={img1} alt="a" />
          </div>
          <div class="slide">
            <img src={img2} alt="a" />
          </div>
          <div class="slide">
            <img src={img3} alt="a" />
          </div>
          <div class="slide">
            <img src={img4} alt="a" />
          </div>
        </div>
        <div class="navigation">
          <label for="r1" class="bar"></label>
          <label for="r2" class="bar"></label>
          <label for="r3" class="bar"></label>
          <label for="r4" class="bar"></label>
        </div>
      </div>
    </div>
  );
};

export default SlidingInfo;
