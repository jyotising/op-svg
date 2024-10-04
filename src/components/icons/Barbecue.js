import * as React from "react";
const SvgBarbecue = (props) => (
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
      d="M10 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M10 13a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M8 15.5V22" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 4a2 2 0 1 0-4 0 2 2 0 0 0 4 0M18 13a2 2 0 1 0-4 0 2 2 0 0 0 4 0"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M16 15.5V22" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M6.5 8.5h3M14.5 8.5h3M6.5 18h3M14.5 18h3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 7v3M16 7v3"
    />
  </svg>
);
export default SvgBarbecue;
