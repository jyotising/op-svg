import * as React from "react";
const SvgMapDistance = (props) => (
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
      d="M19.65 3H4.35A1.35 1.35 0 0 0 3 4.35v15.3c0 .746.604 1.35 1.35 1.35h15.3A1.35 1.35 0 0 0 21 19.65V4.35A1.35 1.35 0 0 0 19.65 3Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 13.5 14.5 15M10.5 16.5 7 18"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 14.5q1.5-2.172 1.5-3a1.5 1.5 0 1 0-3 0q0 .828 1.5 3ZM16 11q1.5-2.172 1.5-3a1.5 1.5 0 1 0-3 0q0 .828 1.5 3Z"
    />
  </svg>
);
export default SvgMapDistance;
