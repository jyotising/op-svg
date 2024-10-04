import * as React from "react";
const SvgLamp = (props) => (
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
      d="M7 4.75a1.75 1.75 0 1 1 3.5 0v5.75H7zM13.5 4.75a1.75 1.75 0 1 1 3.5 0v5.75h-3.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 17H9v4h6z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M5 11a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 .5.5v2a4 4 0 0 1-4 4H9a4 4 0 0 1-4-4z"
    />
  </svg>
);
export default SvgLamp;
