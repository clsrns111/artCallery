import React from "react";
import { useTexture } from "@react-three/drei";

function Rembrandt({ ...props }) {
  const texture = useTexture("/images/Rembrandt.jpg");

  return (
    <group>
      <mesh {...props}>
        <planeBufferGeometry attach="geometry" args={[6, 5]} />
        <meshBasicMaterial attach="material" map={texture} />
      </mesh>

      <mesh
        {...props}
        position={[
          props.position[0] + 0.1,
          props.position[1],
          props.position[2],
        ]}
      >
        <boxBufferGeometry attach="geometry" args={[6, 5, 0.1]} />
        <meshBasicMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default Rembrandt;
