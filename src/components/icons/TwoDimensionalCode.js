import * as React from "react";
const SvgTwoDimensionalCode = (props) => (
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
      d="M10 3H3v7h7zM10 14H3v7h7zM21 3h-7v7h7z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14.5 14v7M20.5 14v7"
    />
  </svg>
);
export default SvgTwoDimensionalCode;
