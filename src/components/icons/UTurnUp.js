import * as React from "react";
const SvgUTurnUp = (props) => (
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
      d="M6.5 7v9.5a5.5 5.5 0 0 0 11 0V2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 4.5 17.5 2 20 4.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M9 4.5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Z"
    />
  </svg>
);
export default SvgUTurnUp;
