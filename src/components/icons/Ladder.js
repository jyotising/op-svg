import * as React from "react";
const SvgLadder = (props) => (
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
      d="M5 21V5c0-3 3-3 3-3M5 7h9M5 11h9M5 15h9M5 19h9M17 21.5v-16c0-3 3-3 3-3"
    />
  </svg>
);
export default SvgLadder;
