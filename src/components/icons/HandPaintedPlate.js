import * as React from "react";
const SvgHandPaintedPlate = (props) => (
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
      strokeWidth={2}
      d="M9 5h12a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H9M2 6a1 1 0 0 1 1-1h6v15H3a1 1 0 0 1-1-1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.5 8.5v2M18.5 8l-6 8.5"
    />
    <path
      fill="#333"
      d="M6.5 13.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M6.5 16.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
    />
  </svg>
);
export default SvgHandPaintedPlate;
