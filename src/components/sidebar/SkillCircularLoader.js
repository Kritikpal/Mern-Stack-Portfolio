import React, { useEffect, useState } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const SkillCircularLoader = ({ percentage, name, loaderThickness }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    const increment = percentage / 50; // Adjust the increment value as needed

    const interval = setInterval(() => {
      currentProgress += increment;
      setProgress(currentProgress);

      if (currentProgress >= percentage) {
        clearInterval(interval);
      }
    }, 20); // Adjust the interval duration for smoother animation
  }, [percentage]);
  return (
    <div className="circular-progress-container d-flex flex-column align-items-center">
      <CircularProgressbar
        value={progress}
        text={`${Math.round(progress)}%`}
        strokeWidth={loaderThickness}
        styles={buildStyles({
          pathTransition: "none",
          textColor: "#fff",
          pathColor: "#f1c40f", // Set the progress bar color to yellow (#f1c40f)
          trailColor: "#eee",
        })}
      />
      <div>{name}</div>
    </div>
  );
};

export default SkillCircularLoader;
