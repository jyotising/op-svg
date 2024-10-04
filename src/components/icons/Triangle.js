import * as React from "react";
const SvgTriangle = (props) => (
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
      d="M11.135 3.495a1 1 0 0 1 1.73 0L22.131 19.5A1 1 0 0 1 21.265 21H2.735a1 1 0 0 1-.866-1.5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgTriangle;
