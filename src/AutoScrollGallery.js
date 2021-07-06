import "./css/AutoScrollGallery.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./img/landscape/", false, /\.(jpg|jpe?g|svg)$/)
);

//

//

const AutoScrollGallery = () => {
  return (
    <div>
      <div class="marquee">
        <ul class="marquee-content">
          <li>
            <img src={images["1.jpg"].default} />
          </li>
          <li>
            <img src={images["2.jpg"].default} />
          </li>
          <li>
            <img src={images["3.jpg"].default} />
          </li>
          <li>
            <img src={images["4.jpg"].default} />
          </li>
          <li>
            <img src={images["5.jpg"].default} />
          </li>
          <li>
            <img src={images["6.jpg"].default} />
          </li>
          <li>
            <img src={images["7.jpg"].default} />
          </li>
          <li>
            <img src={images["8.jpg"].default} />
          </li>
          <li>
            <img src={images["9.jpg"].default} />
          </li>
        </ul>
      </div>
      <div class="preview-box">
        <div class="details">
          <span class="icon fas fa-times"></span>
        </div>
        <div class="img-box">
          <img src="" />
        </div>
      </div>
    </div>
  );
};
export default AutoScrollGallery;
