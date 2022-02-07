import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { usePlane, useBox } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { PositionalAudio } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Ground({ heroPosition }) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));

  useFrame(() => {});

  return (
    <mesh ref={ref} receiveShadow castShadow>
      <planeBufferGeometry attach="geometry" args={[30, 30]} />
      <MeshReflectorMaterial
        attach="material"
        color="#878790"
        blur={[400, 400]}
        resolution={1024}
        mixBlur={1}
        mixStrength={3}
        depthScale={1}
        minDepthThreshold={0.85}
        metalness={0}
        roughness={1}
      />
    </mesh>
  );
}

export default Ground;
