import * as React from "react";
const SvgBaseballCap = (props) => (
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
      d="M6 15a8 8 0 1 1 16 0v3H6z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M11 18c-.5-1.75-.5-11 3-11s3.25 9 3 11"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 18h-12a1.5 1.5 0 0 0 0 3h12a1.5 1.5 0 0 0 0-3"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M14 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
export default SvgBaseballCap;
