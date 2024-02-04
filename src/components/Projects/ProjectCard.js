import React from "react";
import { animated } from "react-spring";
import { useBlinkingAnimation } from "../../hooks/useAnimations";

function ProjectCard({
  index = 0,
  className = "",
  image = "footer/hero_1.jpg",
  projectTitle = "Project Title",
  projectShortDescription = "lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
}) {
  return (
    <animated.div style={useBlinkingAnimation({ delay: index * 300 })}>
      <div className={`project-card ${className}`}>
        <img className="project-img" src={image} alt="Project" />
        <div className="project-card-content">
          <h5>{projectTitle}</h5>
          <p className="project-short-description">{projectShortDescription}</p>
          <a href="#">Read More</a>
          <span className="arrow-icon">→</span>
        </div>
      </div>
    </animated.div>
  );
}

export default ProjectCard;
