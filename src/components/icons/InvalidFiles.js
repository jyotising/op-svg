import * as React from "react";
const SvgInvalidFiles = (props) => (
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
      d="M4 22V2h11.5L20 7.25V22z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 12.5a5 5 0 1 1-10 0 5 5 0 0 1 10 0M8.5 9l7 7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 12.5a5 5 0 0 1-5 5M7 12.5a5 5 0 0 1 5-5"
    />
  </svg>
);
export default SvgInvalidFiles;
