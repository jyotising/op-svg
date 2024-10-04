import * as React from "react";
const SvgPaperShip = (props) => (
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
      d="m2 12 4.286 9L12 14.5zM22 12l-4.286 9L12 14.5zM6.5 21h11L12 14.5z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m6 13 6-11 6 11"
    />
  </svg>
);
export default SvgPaperShip;
