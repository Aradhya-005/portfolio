import React, { useRef } from "react";

export function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  color = "currentColor", // Add color prop with a default value
  className = "",
  ...props
}) {
  const id = useRef(`dot-pattern-${Math.random().toString(36).substr(2, 9)}`); // Generate a unique ID

  return (
    <svg
      aria-hidden="true"
      className={`dot-pattern ${className}`}
      {...props}
    >
      <defs>
        <pattern
          id={id.current}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <circle cx={cx} cy={cy} r={cr} fill={color} /> {/* Use color prop here */}
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id.current})`} />
    </svg>
  );
}
