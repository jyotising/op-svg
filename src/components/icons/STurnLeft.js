import * as React from "react";
const SvgSTurnLeft = (props) => (
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
      d="M21 19H6.5c-2 0-3.5-1.5-3.5-3.5S4.5 12 6.5 12h3M9.5 12h8c2 0 3.5-1.5 3.5-3.5S19.5 5 17.5 5h-9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 21.5 21 19l-2.5-2.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M6 2.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);
export default SvgSTurnLeft;
