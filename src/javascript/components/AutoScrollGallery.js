import "../../css/AutoScrollGallery.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("../../img/scroll/", false, /\.(jpg|jpe?g|svg)$/)
);
/*
//
window.onload = () => {
  const root = document.documentElement;
  const marqueeElementsDisplayed = getComputedStyle(root).getPropertyValue(
    "--marquee-elements-displayed"
  );
  const marqueeContent = document.querySelector("ul.marquee-content");

  root.style.setProperty("--marquee-elements", marqueeContent.children.length);

  for (let i = 0; i < 4; i++) {
    marqueeContent.appendChild(marqueeContent.children[i].cloneNode(true));
  }

  const gallery = document.querySelectorAll(".marquee-content li"),
    previewBox = document.querySelector(".preview-box"),
    previewImg = previewBox.querySelector("img"),
    closeIcon = previewBox.querySelector(".details .icon");

  for (let i = 0; i < gallery.length; i++) {
    let newIndex = i;
    gallery[i].onclick = () => {
      function preview() {
        let selectedImgUrl = gallery[newIndex].querySelector("img").src;
        previewImg.src = selectedImgUrl;
      }
      preview();
      previewBox.classList.add("show");
      closeIcon.onclick = () => {
        previewBox.classList.remove("show");
      };
    };
  }
};*/
//

const AutoScrollGallery = () => {
  return (
    <div>
      <div class="marquee">
        <ul class="marquee-content">
          <li>
            <img src={images["1.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["2.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["3.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["4.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["5.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["6.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["7.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["8.jpg"].default} alt="a" />
          </li>
          <li>
            <img src={images["9.jpg"].default} alt="a" />
          </li>
        </ul>
      </div>
      <div class="preview-box">
        <div class="details">
          <span class="icon">X</span>
        </div>
        <div class="img-box">
          <img src="" alt="a" />
        </div>
      </div>
    </div>
  );
};
export default AutoScrollGallery;
