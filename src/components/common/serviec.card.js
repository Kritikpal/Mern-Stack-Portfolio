import { useSlidingAnimation } from "../../hooks/useAnimations";
import { animated } from "react-spring";

function ServiceCard({ title, description, index }) {
  return (
    <div className="service-card">
      <animated.div
        style={useSlidingAnimation({
          delay: index * 300,
          direction: "bottom-to-top",
        })}
      >
        <div class="card">
          <div class="box">
            <div class="content">
              <h2>{index + +1}</h2>
              <h3>{title}</h3>
              <p>{description}</p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </animated.div>
    </div>
  );
}

export default ServiceCard;
