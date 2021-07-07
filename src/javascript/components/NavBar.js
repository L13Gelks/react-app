import "../../css/NavBar.css";
import MagiClock from "./MagiClock";
import logo from "../../img/icons/icon.png";

const AutoScrollGallery = () => {
  return (
    <div>
      <header>
        <img class="logo" src={logo} alt="logo" />
        <nav>
          <ul class="nav_links">
            <li>
              <a href="./index.js">Home</a>
            </li>
            <li>
              <a href="#about">About Me</a>
            </li>
          </ul>
        </nav>
        <MagiClock />
      </header>
    </div>
  );
};

export default AutoScrollGallery;
