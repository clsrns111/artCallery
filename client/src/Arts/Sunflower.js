import React from "react";
import { useTexture } from "@react-three/drei";

function Sunflower({ ...props }) {
  const texture = useTexture("/images/Sunflower.jpg");

  return (
    <group>
      <mesh {...props}>
        <planeBufferGeometry attach="geometry" args={[4, 5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>
      <mesh
        {...props}
        position={[
          props.position[0],
          props.position[1],
          props.position[2] + 0.1,
        ]}
      >
        <boxBufferGeometry attach="geometry" args={[4, 5, 0.1]} />
        <meshBasicMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default Sunflower;
