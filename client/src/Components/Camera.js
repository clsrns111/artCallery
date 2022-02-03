import { PerspectiveCamera } from "@react-three/drei";

function Camera({ appreciation }) {
  return (
    <PerspectiveCamera
      position={[0, 1.5, 0]}
      near={0.9}
      far={200}
      makeDefault
      aspect={window.innerWidth / window.innerHeight}
      fov={70}
    />
    // <PerspectiveCamera
    //   position={[0, 0, 0]}
    //   near={0.9}
    //   far={200}
    //   makeDefault
    //   aspect={window.innerWidth / window.innerHeight}
    //   fov={70}
    // />
  );
}

export default Camera;
