import { useFrame } from "@react-three/fiber";
import React, { useRef } from "react";
import { usePlane, useBox } from "@react-three/cannon";
import { MeshReflectorMaterial } from "@react-three/drei";
import { PositionalAudio } from "@react-three/drei";
import { Suspense, useEffect, useState } from "react";
import { useThree, useLoader } from "@react-three/fiber";
import * as THREE from "three";

function Line({ ...props }) {
  return (
    <group>
      <mesh {...props}>
        <planeBufferGeometry args={[5, 3]} />
        <meshBasicMaterial color={"#ffffff"} />
      </mesh>
    </group>
  );
}

function Sound({ url }) {
  const sound = useRef();
  const { camera } = useThree();
  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, url);
  useEffect(() => {
    sound.current.setBuffer(buffer);
    sound.current.setRefDistance(1);
    sound.current.setLoop(true);
    sound.current.play();
    // camera.add(listener);
    // return () => camera.remove(listener);
  }, []);
  return <positionalAudio ref={sound} args={[listener]} />;
}

function Ground({ heroPosition }) {
  const [ref] = usePlane(() => ({
    rotation: [-Math.PI / 2, 0, 0],
  }));
  const line1 = useRef();
  useFrame(() => {
    // console.log(ref.current.children[0].children[0].position.min);
  });

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
      {/* <Sound url="/mp3/sunflower.mp3" /> */}
    </mesh>
  );
}

export default Ground;
