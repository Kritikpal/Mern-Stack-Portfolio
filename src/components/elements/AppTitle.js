import React from "react";
import { animated } from "react-spring";
import {
  useBlinkingAnimation,
  useSlidingAnimation,
} from "../../hooks/useAnimations";

function AppTitle({ title }) {
  return (
    <animated.div style={useSlidingAnimation({ delay: 0 })}>
      <h1 className="app-title">{title}</h1>
    </animated.div>
  );
}

export default AppTitle;
