import * as React from "react";
const SvgBaggageDelay = (props) => (
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
      d="M18 13V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8.5M8 6v14M14 6v8.5M14 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M17.5 22a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16v2h2"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M6.5 20v2" />
  </svg>
);
export default SvgBaggageDelay;
