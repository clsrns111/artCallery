import React, { useState } from "react";
import Ground from "./Ground";
import Wall from "./Wall";
import { useCursor } from "@react-three/drei";
import Entombment from "../Arts/Entombment";
import Great from "../Arts/Great";
import Wallpaperbetter from "../Arts/Wallpaperbetter";
import Umbrellas from "../Arts/Umbrellas";
import Sunflower from "../Arts/Sunflower";
import Rembrandt from "../Arts/Rembrandt";
import HayWain from "../Arts/HayWain";

function World({ heroPosition, setappreciation }) {
  const [hover, sethover] = useState(false);
  useCursor(hover);
  return (
    <group>
      <group
        onPointerOver={(e) => sethover(true)}
        onPointerOut={(e) => sethover(false)}
      >
        <Entombment
          setappreciation
          name={"Entombment"}
          onClick={(e) => {
            setappreciation("Entombment");
          }}
          position={[4, 4, -13.9]}
          rotation={[0, 0, 0]}
        />
        <Great
          onClick={(e) => {
            setappreciation("Great");
          }}
          position={[13.8, 4, -5]}
          rotation={[0, -Math.PI / 2, 0]}
        />
        <Wallpaperbetter
          onClick={(e) => {
            setappreciation("Wallpaperbetter");
          }}
          position={[-4, 5, 13.8]}
          rotation={[0, -Math.PI, 0]}
        />
        <Umbrellas
          onClick={(e) => {
            setappreciation("Umbrellas");
          }}
          rotation={[0, Math.PI, 0]}
          position={[-3.5, 4, -5.7]}
        />
        <Sunflower
          onClick={(e) => {
            setappreciation("Sunflower");
            hover(true);
          }}
          rotation={[0, Math.PI, 0]}
          position={[4, 4, 4.2]}
        />
        <Rembrandt
          onClick={(e) => {
            setappreciation("Rembrandt");
          }}
          rotation={[0, -Math.PI / 2, 0]}
          position={[-0.6, 4, 1]}
        />
        <HayWain
          onClick={(e) => {
            setappreciation("HayWain");
          }}
          rotation={[0, Math.PI / 2, 0]}
          position={[-13.8, 4, 4]}
        />
      </group>
      <Wall />
      <Ground heroPosition={heroPosition} />
    </group>
  );
}

export default World;
