import * as React from "react";
const SvgCooking = (props) => (
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
      strokeWidth={2}
      d="M3 21h18M3 18h18"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 12.5a7.5 7.5 0 1 1 15 0V18h-15z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M8.5 12.5v2" />
    <path stroke="#333" strokeWidth={2} d="M14 5V4a2 2 0 1 0-4 0v1" />
  </svg>
);
export default SvgCooking;
