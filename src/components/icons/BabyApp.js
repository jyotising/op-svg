import * as React from "react";
const SvgBabyApp = (props) => (
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
      d="M21.5 13v3a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1H8"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 20h20"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M15 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 9V8M20.5 9V8M15 4c-.083-.5-.6-1.6-2-2M15 4c.042-.5.3-1.6 1-2"
    />
    <path
      fill="#333"
      d="M16.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M13.5 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgBabyApp;
