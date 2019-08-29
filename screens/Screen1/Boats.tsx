import React from "react";
import { AnimatedObject } from "./AnimatedObject";

export const Boats = () => (
  <>
    <AnimatedObject
      image={require("../../assets/red-boat.png")}
      durationInSec={12}
      top="45%"
    />
    <AnimatedObject
      image={require("../../assets/canoe.png")}
      durationInSec={29}
      top="51%"
    />
    <AnimatedObject
      image={require("../../assets/yellow-boat.png")}
      durationInSec={22}
      top="47%"
    />
    <AnimatedObject
      image={require("../../assets/green-boat.png")}
      durationInSec={18}
      top="48%"
    />
  </>
);
