import { useTexture } from "@react-three/drei";
import React from "react";

function Umbrellas({ ...props }) {
  const texture = useTexture("/images/Umbrellas.jpg");

  return (
    <group>
      <mesh {...props}>
        <planeBufferGeometry attach="geometry" args={[5, 5]} />
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
        <boxBufferGeometry attach="geometry" args={[5, 5, 0.1]} />
        <meshBasicMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default Umbrellas;
