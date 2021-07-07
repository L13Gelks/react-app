import React, { useState, useEffect } from "react";
import "../../css/ImageAnimation.css";

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const images = importAll(
  require.context("./img/character/shield", false, /\.(png|jpe?g|svg)$/)
);

const ImageAnimation = () => {
  const [counter, setCounter] = React.useState(1);

  React.useEffect(() => {
    counter < 16 && setTimeout(() => setCounter(counter + 1), 100);
    counter > 15 && setTimeout(() => setCounter(counter - 15), 100);
  }, [counter]);
  return (
    <div className="main">
      <img
        src={images["Shield (" + counter + ").png"].default}
        className="3"
        alt="3"
      />
    </div>
  );
};

export default ImageAnimation;
