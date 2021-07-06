import './css/NavBar.css';

const AutoScrollGallery = () => {
    return (
      <div>
          <header>
            <img class="logo" src="/images/logo.png" alt="logo" />
          <nav>
          <ul class="nav_links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About Me</a></li>
          </ul>
          </nav>
          </header>
      </div>
    );
}

export default AutoScrollGallery;