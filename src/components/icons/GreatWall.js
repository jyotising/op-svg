import * as React from "react";
const SvgGreatWall = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 4.5V20h20V4.5h-4V8h-4V4.5h-4V8H6V4.5zM2 12h20M2 16h20M12 12v4M8 16v4M8 8v4M16 16v4M16 8v4"
    />
  </svg>
);
export default SvgGreatWall;
