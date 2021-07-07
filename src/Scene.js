import "./css/Scene.css";
import { Canvas } from "@react-three/fiber";
import { useLoader } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

const Model = ({ data }) => {
  const gltf = useLoader(GLTFLoader, data);
  return (
    <>
      <primitive object={gltf.scene} scale={1} />
    </>
  );
};

export default function App({ url }) {
  return (
    <div className="App">
      <div className="viewer">
        <Canvas>
          <Suspense fallback={null}>
            <Model data={url} />
            <OrbitControls />
            <Environment preset="sunset" background />
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
}
