import './css/SlidingInfo.css';
import img from './img/landscape/3.jpg';

const SlidingInfo = () => {
    return (
        <div>
        <div class="slidershow middle">
          <div class="slides">
            <input type="radio" name="r" id="r1" checked />
            <input type="radio" name="r" id="r2" />
            <input type="radio" name="r" id="r3" />
            <input type="radio" name="r" id="r4" />
            <div class="slide s1">
              <img src={img} />
            </div>
            <div class="slide">
              <img src={img} />
            </div>
            <div class="slide">
              <img src={img} />
            </div>
            <div class="slide">
              <img src="images/slide4.jpg" />
            </div>
          </div>
          <div class="navigation">
            <label for="r1" class="bar">
            </label>
            <label for="r2" class="bar">
            </label>
            <label for="r3" class="bar">
            </label>
            <label for="r4" class="bar">
            </label>
          </div>
        </div>
      </div>
    );
}

export default SlidingInfo;