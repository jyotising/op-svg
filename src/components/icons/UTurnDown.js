import * as React from "react";
const SvgUTurnDown = (props) => (
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
      d="M17.5 17V7.5a5.5 5.5 0 0 0-11 0V22"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 19.5 6.5 22 4 19.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M15 19.5a2.5 2.5 0 1 0 5 0 2.5 2.5 0 0 0-5 0Z"
    />
  </svg>
);
export default SvgUTurnDown;
