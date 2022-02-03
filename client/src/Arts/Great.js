import { useTexture } from "@react-three/drei";
import React from "react";

function Great({ ...props }) {
  const texture = useTexture("/images/Great.jpg");

  return (
    <group>
      <mesh {...props}>
        <planeBufferGeometry attach="geometry" args={[10, 5]} />
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
        <boxBufferGeometry attach="geometry" args={[10, 5, 0.1]} />
        <meshBasicMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default Great;
