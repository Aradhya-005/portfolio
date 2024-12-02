import React from "react";
import "./Grid.css"; // Custom styles for grid

const GridPattern = ({ width = 20, height = 20, x = 0, y = 0, className = "", color = "#ffffff" }) => {
  const id = `grid-pattern-${Math.random().toString(36).substr(2, 9)}`; // Generate a unique ID for the pattern

  return (
    <svg aria-hidden="true" className={`grid-pattern ${className}`}>
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          {/* Create white dots */}
          <rect width="1" height="1" fill={color} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
};

export default GridPattern;
