import * as React from "react";
const SvgUTurnRight = (props) => (
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
      d="M17 6.5H7.5a5.5 5.5 0 0 0 0 11H22"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m19.5 15 2.5 2.5-2.5 2.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M19.5 9a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);
export default SvgUTurnRight;
