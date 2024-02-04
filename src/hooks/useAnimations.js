import { useSpring } from "react-spring";

function useBlinkingAnimation({ duration = 1000, delay = 0 }) {
  const animation = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    delay: delay,
    config: { duration: duration },
  });
  return animation;
}

function useSlidingAnimation({
  duration = 1000,
  delay = 0,
  direction = "left-to-right",
}) {
  const animationDir = getSlideAnimationDirectionStartAndEnd(direction);
  const animation = useSpring({
    opacity: 1,
    transform: animationDir.to,
    from: { opacity: 0, transform: animationDir.from },
    delay: delay,
    config: { duration: duration },
  });

  return animation;
}

function getSlideAnimationDirectionStartAndEnd(direction) {
  switch (direction) {
    case "left-to-right":
      return {
        from: "translateX(-50px)",
        to: "translateX(0)",
      };
    case "right-to-left":
      return {
        from: "translateX(50px)",
        to: "translateX(0)",
      };
    case "top-to-bottom":
      return {
        from: "translateY(-50px)",
        to: "translateY(0)",
      };
    case "bottom-to-top":
      return {
        from: "translateY(50px)",
        to: "translateY(0)",
      };
    default:
      return {
        from: "translateX(-50px)",
        to: "translateX(0)",
      };
  }
}

function useScaleAnimation({ duration = 1000, delay = 0 }) {
  const animation = useSpring({
    opacity: 1,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.4)" },
    config: { duration: duration },
    delay: delay,
  });
  return animation;
}

export { useSlidingAnimation, useScaleAnimation, useBlinkingAnimation };
