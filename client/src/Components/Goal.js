import { useFrame } from "@react-three/fiber";
import React, { useRef, useState } from "react";
import Camera from "./Camera";
import * as THREE from "three";
import foward from "../controllers/foward";
import firstPos from "../controllers/firstPos";
import Hero from "./Hero";

function Goal({ setheroPosition, setappreciation }) {
  const goal = useRef(null);
  const mesh = useRef(null);
  let temp = new THREE.Vector3();

  const [keys, setkeys] = useState({
    a: false,
    w: false,
    s: false,
    d: false,
  });

  const keydown = (e) => {
    const key = e.code.replace("Key", "").toLowerCase();
    if (keys[key] !== undefined) {
      setkeys((state) => ({ ...state, [key]: true }));
    }
  };

  const keyup = (e) => {
    const key = e.code.replace("Key", "").toLowerCase();
    if (keys[key] !== undefined) {
      setkeys((state) => ({ ...state, [key]: false }));
    }
  };

  useFrame(() => {
    let hero = mesh.current.children[0];
    let follow = hero.children[6];
    let speed = 0;
    let velocity = 0;

    if (keys.w) {
      foward(hero);
      speed += 0.05;
      setappreciation(null);
    } else {
      hero.children.length > 5 && firstPos(hero);
    }

    velocity += (speed - velocity) * 1;
    hero.translateX(velocity);

    if (keys.a) hero.rotateY(0.05);
    if (keys.d) hero.rotateY(-0.05);

    document.body.addEventListener("keydown", keydown);
    document.body.addEventListener("keyup", keyup);

    temp.setFromMatrixPosition(follow.matrixWorld);
    goal.current.position.lerp(temp, 0.1);

    goal.current.children[0].lookAt(hero.position);
    setheroPosition(hero.position);
  });

  return (
    <>
      <group ref={goal}>
        <Camera />
      </group>
      <group ref={mesh}>
        <Hero keys={keys}></Hero>
      </group>
    </>
  );
}

export default Goal;
