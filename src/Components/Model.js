import React, { useRef } from "react";
import { Canvas, extend, useThree, useFrame } from "react-three-fiber";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

extend({ OrbitControls });

function Model() {
  const Controls = () => {
    const controls = useRef();

    const { camera, gl } = useThree();

    useFrame(() => {
      controls.current.update();
    });

    return (
      <orbitControls
        ref={controls}
        autoRotate
        args={[camera, gl.domElement]}
      ></orbitControls>
    );
  };

  return (
    <div>
      <Canvas>
        <mesh>
          <Controls />
          <boxBufferGeometry
            attach="geometry"
            args={[4, 4, 4]}
          ></boxBufferGeometry>
          <meshBasicMaterial
            wireframe
            attach="material"
            color="white"
          ></meshBasicMaterial>
        </mesh>
      </Canvas>
    </div>
  );
}

export default Model;
