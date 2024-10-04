import * as React from "react";
const SvgRadio = (props) => (
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
      d="M20.5 6.5h-17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-12a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M9 17a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12h3M15 16h3M3.5 6.5l9-4.5"
    />
  </svg>
);
export default SvgRadio;
