import * as React from "react";
const SvgPyramid = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 6 19 21H2z"
      clipRule="evenodd"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.25 21H22l-4-7-1.5 2.5M10.5 6l-4 15"
    />
  </svg>
);
export default SvgPyramid;
