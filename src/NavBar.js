import "./css/NavBar.css";
import MagiClock from "./MagiClock";

const AutoScrollGallery = () => {
  return (
    <div>
      <header>
        <img class="logo" src="/images/logo.png" alt="logo" />
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
