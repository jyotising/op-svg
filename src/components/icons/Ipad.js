import * as React from "react";
const SvgIpad = (props) => (
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
      strokeWidth={2}
      d="M18.5 2.5h-13a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-17a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 18h2"
    />
  </svg>
);
export default SvgIpad;
