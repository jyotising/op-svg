import * as React from "react";
const SvgTv = (props) => (
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
      d="M20.5 7h-17a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 7 7-4M11.5 7 5 3M17.5 10v3"
    />
    <path fill="#333" d="M18.5 17a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
  </svg>
);
export default SvgTv;
