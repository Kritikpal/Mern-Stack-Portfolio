import { useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";

function SidebarHorizontalProgress({
  name = "",
  percentage = 0,
  loaderThickness,
}) {
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
    <>
      <div className="skill-name">
        {name}:<span className="mx-2">{Math.round(progress) + "%"}</span>
      </div>
      <ProgressBar
        now={progress}
        className="horizontal-progress mt-1"
        style={{ height: loaderThickness }}
        variant="warning"
        striped
        animated
      />
    </>
  );
}

export default SidebarHorizontalProgress;
