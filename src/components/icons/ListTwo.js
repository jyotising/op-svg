import * as React from "react";
const SvgListTwo = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.5 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4.5 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 12h11M10.5 19h11M10.5 5h11"
    />
  </svg>
);
export default SvgListTwo;
