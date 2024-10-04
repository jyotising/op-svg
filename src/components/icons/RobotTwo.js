import * as React from "react";
const SvgRobotTwo = (props) => (
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
      d="M2.5 17.5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1V21h-19zM21 9h-4l-3-3 3-3h4"
    />
    <path stroke="#333" strokeWidth={2} d="M4 8a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 6h8M5 8l4 8.5"
    />
  </svg>
);
export default SvgRobotTwo;
