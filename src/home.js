import AutoScrollGallery from "./javascript/components/AutoScrollGallery";
import SlidingInfo from "./javascript/components/SlidingInfo";
import Scene from "./javascript/components/Scene";

function home() {
  return (
    <div>
      <AutoScrollGallery />
      <SlidingInfo />
      <Scene url="./donuts.gltf" />
    </div>
  );
}

export default home;
