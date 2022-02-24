import { useFrame } from "@react-three/fiber";
import React, { useEffect, useRef, useState } from "react";
import { brownMat, whiteMat, lightBrownMat, pinkMat } from "./Material.js";
import * as THREE from "three";
import { useBox, useCompoundBody } from "@react-three/cannon";

function Hero({ keys }) {
  const [hero, api] = useCompoundBody(() => ({
    type: "Kinematic",
    position: [-10, 0, -10],
    mass: 1,
    shapes: [
      { type: "Box", mass: 1, position: [0, 8, 0], args: [4, 4, 4] },
      { type: "Box", mass: 1, position: [0, -2, 0], args: [4.1, 4.1, 4.1] },
      { type: "Box", mass: 1, position: [0, 8, 7], args: [3, 3, 3] },
      { type: "Box", mass: 1, position: [0, 8, -7], args: [3, 3, 3] },
      { type: "Box", mass: 1, position: [0, 0, 5], args: [4, 3, 5] },
      { type: "Box", mass: 1, position: [0, 0, -5], args: [4, 3, 5] },
    ],
  }));

  useFrame(({ camera, mouse, raycaster }) => {
    if (keys.a) {
      api.rotation.set(
        hero.current.rotation.x,
        (hero.current.rotation.y += 0.01),
        hero.current.rotation.z
      );
    }
    if (keys.d) {
      api.rotation.set(
        hero.current.rotation.x,
        (hero.current.rotation.y -= 0.01),
        hero.current.rotation.z
      );
    }
    if (keys.w) {
      api.position.set(
        (hero.current.position.x += 0.01),
        hero.current.position.y,
        hero.current.position.z
      );
    }
    // if (keebs.right) {
    //   api.velocity.set(1 * speed, velocity.current[1], 0)
    // }
  });
  return (
    <group ref={hero} scale={[0.05, 0.05, 0.05]}>
      <Head />
      <Torso />
      <Hand />
      <Leg />
      <group position={[-100, -10, 0]} />
    </group>
  );
}

function Torso() {
  const [ref] = useBox(() => ({
    mass: 1,
    type: "Static",
    position: [0, 8, 0],
  }));
  return (
    <mesh position={[0, 8, 0]} name="torso" castShadow={true}>
      <boxBufferGeometry args={[8, 8, 8]} />
      <meshPhongMaterial color={brownMat.color} />
    </mesh>
  );
}

function Head() {
  const [ref] = useBox(() => ({
    mass: 1,
    type: "Static",
    position: [0, -3, 0],
  }));
  return (
    <group>
      <mesh position={[0, -5, 0]} name="head" castShadow={true}>
        <boxGeometry args={[18, 18, 18]} />
        <meshBasicMaterial
          side={THREE.DoubleSide}
          color={brownMat.color}
        ></meshBasicMaterial>
      </mesh>
    </group>
  );
}

function Hand() {
  const [ref1] = useBox(() => ({
    mass: 1,
    type: "Static",
    position: [0, 8, 7],
  }));
  const [ref2] = useBox(() => ({
    mass: 1,
    type: "Static",
    position: [0, 8, -7],
  }));
  return (
    <>
      <mesh position={[0, 8, 7]} name="leftHand" castShadow={true}>
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshPhongMaterial color={whiteMat.color} />
      </mesh>
      <mesh position={[0, 8, -7]} name="rightHand" castShadow={true}>
        <boxBufferGeometry args={[3, 3, 3]} />
        <meshPhongMaterial color={whiteMat.color} />
      </mesh>
    </>
  );
}

function Leg() {
  // const [ref1] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 0, 5],
  //   type: "Static",
  // }));
  // const [ref2] = useBox(() => ({
  //   mass: 1,
  //   position: [0, 0, -5],
  //   type: "Static",
  // }));
  return (
    <>
      <mesh position={[0, 0, 5]} name="rightLeg" castShadow={true}>
        <boxBufferGeometry args={[8, 3, 5]} />
        <meshPhongMaterial color={brownMat.color} />
      </mesh>

      <mesh position={[0, 0, -5]} name="leftLeg" castShadow={true}>
        <boxBufferGeometry args={[8, 3, 5]} />
        <meshPhongMaterial color={brownMat.color} />
      </mesh>
    </>
  );
}

export default Hero;
