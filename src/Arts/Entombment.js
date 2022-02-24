import { useTexture } from "@react-three/drei";
import React from "react";

function Entombment({ ...props }) {
  const texture = useTexture("/images/Entombment.jpg");
  console.log([props.position[0], props.position[1], props.position[2] - 5]);
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
          props.position[2] - 0.51,
        ]}
      >
        <boxBufferGeometry attach="geometry" args={[5, 5]} />
        <meshBasicMaterial attach="material" color={"black"} />
      </mesh>
    </group>
  );
}

export default Entombment;
