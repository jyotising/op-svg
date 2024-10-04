import * as React from "react";
const SvgDroneOne = (props) => (
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
      d="M14.5 9V8a2.5 2.5 0 0 0-5 0v1M8.5 9h7l-1.077 3.5H9.577z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 11H2.5v3.5H6zM21.5 11H18v3.5h3.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 4H2M15 16.5l2 3.5M9 16.5 7 20M22 4h-6"
    />
  </svg>
);
export default SvgDroneOne;
