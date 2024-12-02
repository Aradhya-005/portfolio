import React from "react";
import GridPattern from "./GridPattern"; // Import the GridPattern component
import "./LinearComponent.css"; // Custom CSS for the layout

const GridPatternLinearGradient = () => {
  return (
    <div className="grid-container">
      <GridPattern
        width={20}
        height={20}
        x={-1}
        y={-1}
        color="#ffffff"
        className="grid-pattern-mask"
      />
    </div>
  );
};

export default GridPatternLinearGradient;
