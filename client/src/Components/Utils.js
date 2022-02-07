import { OrbitControls } from "@react-three/drei";
import React from "react";

function Utils() {
  return (
    <>
      <axesHelper scale={10} />
      <OrbitControls />
    </>
  );
}

export default Utils;
