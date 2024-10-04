import * as React from "react";
const SvgOscillator = (props) => (
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
      d="M3.5 4.5V12a3 3 0 0 0 3 3h11a3 3 0 0 0 3-3V4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3.5 5a3 3 0 0 1 3-3h11a3 3 0 0 1 0 6h-11a3 3 0 0 1-3-3"
    />
    <path
      fill="#333"
      d="M7.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M10.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.5 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 15v7M14.5 15v7"
    />
  </svg>
);
export default SvgOscillator;
