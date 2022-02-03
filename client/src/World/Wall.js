import React, { useEffect, useRef, useState } from "react";
import { usePlane, useBox, useCompoundBody } from "@react-three/cannon";
import { useLoader, useThree } from "@react-three/fiber";
import * as THREE from "three";

function Wall1({ args, ...props }) {
  const [ref, api] = useBox(() => ({
    mass: 1000,
    args,
    ...props,
    type: "Kinematic",
  }));
  return (
    <mesh {...props} ref={ref}>
      <boxBufferGeometry args={args} />
      <meshBasicMaterial color={0xcccccc} />
    </mesh>
  );
}

function Sound({ url }) {
  const sound = useRef();

  const [listener] = useState(() => new THREE.AudioListener());
  const buffer = useLoader(THREE.AudioLoader, url);

  useEffect(() => {
    sound.current.setBuffer(buffer);
    sound.current.setRefDistance(1);
    sound.current.setLoop(false);
    sound.current.play();
  }, []);
  return <positionalAudio ref={sound} args={[listener]} />;
}

function Wall() {
  const [url, seturl] = useState(null);

  const [play, setplay] = useState(false);
  const [ref] = useCompoundBody(() => ({
    mass: 1000,
    type: "Static",
    linearDamping: 0.95,
    angularDamping: 0.95,

    // type: "Static",
    shapes: [
      { type: "Box", mass: 1000, position: [0, 0, -3], args: [1, 10, 20] },
      { type: "Box", mass: 1000, position: [0, 0, -3], args: [1, 10, 20] },
      { type: "Box", mass: 1000, position: [-10, 0, 0], args: [1, 10, 7] },
      { type: "Box", mass: 1000, position: [10, 0, -6], args: [1, 10, 7] },
      { type: "Box", mass: 1000, position: [17, 0, -10], args: [1, 10, 15] },
      { type: "Box", mass: 1000, position: [10, 0, 6], args: [1, 10, 7] },
      { type: "Box", mass: 1000, position: [17, 0, 10], args: [1, 10, 15] },
      { type: "Box", mass: 1000, position: [25, 0, -5.5], args: [1, 10, 11] },
      { type: "Box", mass: 1000, position: [25, 0, 5.5], args: [1, 10, 11] },
    ],
  }));

  return (
    <group ref={ref}>
      <Wall1
        position={[4.5, 5, -14.5]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[1, 10, 20]}
      />

      <Wall1
        position={[-4.5, 5, 14.5]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[1, 10, 20]}
      />
      <Wall1 position={[-14.5, 5, 5]} rotation={[0, 0, 0]} args={[1, 10, 20]} />
      <Wall1 position={[14.5, 5, -5]} rotation={[0, 0, 0]} args={[1, 10, 20]} />
      <Wall1 position={[0, 5, 0]} rotation={[0, 0, 0]} args={[1, 10, 10]} />
      <Wall1
        position={[-3.5, 5, -5]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[1, 10, 8]}
      />
      <Wall1
        position={[3.5, 5, 5]}
        rotation={[0, -Math.PI / 2, 0]}
        args={[1, 10, 8]}
      />
    </group>
  );
}

export default Wall;
