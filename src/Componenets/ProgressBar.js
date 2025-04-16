import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ProgressBar = ({ progressPercent }) => {
  return (
    <div style={{ width: "60px", height: "60px" }}>
      <CircularProgressbar
        value={progressPercent}
        text={`${Math.round(progressPercent)}%`}
        styles={buildStyles({
          textSize: "28px",
          pathColor: "#3b82f6",
          textColor: "#1e3a8a",
          trailColor: "#e2e8f0",
        })}
      />
    </div>
  );
};

export default ProgressBar;
