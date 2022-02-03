import { OrbitControls } from "@react-three/drei";
import React from "react";

function Utils() {
  return (
    <>
      {/* <gridHelper args={[1000, 1000]} /> */}
      <axesHelper scale={10} />
      <OrbitControls />
    </>
  );
}

export default Utils;
