import "./App.css";
import { Canvas } from "@react-three/fiber";
import { useEffect, useState } from "react";
import Light from "./Components/Light";
import Utils from "./Components/Utils";
import Goal from "./Components/Goal";
import World from "./World/World";
import { Physics } from "@react-three/cannon";
import Entombment from "./Arts/Entombment";
import { Html, Image } from "@react-three/drei";

function App() {
  const [heroPosition, setheroPosition] = useState(null);
  const [appreciation, setappreciation] = useState(null);
  return (
    <div className="App">
      <>
        <Canvas
          style={{ height: window.innerHeight, width: window.innerWidth }}
          pixcelRatio={window.devicePixelRatio}
        >
          <Physics
            allowSleep={false}
            iterations={15}
            gravity={[0, -200, 0]}
            defaultContactMaterial={{
              friction: 0.001,
              restitution: 0.7,
              contactEquationStiffness: 1e7,
              contactEquationRelaxation: 1,
              frictionEquationStiffness: 1e7,
              frictionEquationRelaxation: 2,
            }}
          >
            <Goal
              setappreciation={setappreciation}
              setheroPosition={setheroPosition}
            />
            {/* <Utils /> */}
            <Light />
            <World
              setappreciation={setappreciation}
              heroPosition={heroPosition}
            />
          </Physics>
        </Canvas>
        {appreciation && (
          <div
            className="image"
            style={{ width: window.innerWidth, height: window.innerHeight }}
          >
            <img
              style={size[appreciation]}
              src={`/images/${appreciation}.jpg`}
            />

            <audio
              controls
              src={`/mp3/${appreciation}.mp3`}
              className="audio"
            ></audio>
          </div>
        )}
      </>
    </div>
  );
}
const size = {
  Sunflower: { width: "50%", height: "90%" },
  Great: {
    width: "94%",
    height: "90%",
  },
  HayWain: {
    width: "94%",
    height: "90%",
  },
  Entombment: {
    width: "70%",
    height: "90%",
  },
  Wallpaperbetter: {
    width: "94%",
    height: "90%",
  },
  Umbrellas: {
    width: "50%",
    height: "90%",
  },
  Rembrandt: {
    width: "50%",
    height: "90%",
  },
};

export default App;
