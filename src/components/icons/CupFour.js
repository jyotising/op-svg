import * as React from "react";
const SvgCupFour = (props) => (
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
      d="M7 12.5c0 1 .536 3.5 7.5 3.5s7.5-2.5 7.5-3.5V5H7z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 8h-3v2.5L13 12l1.5-1.5zM13 8V5M7.5 20h14"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7H2s.5 2.5 1 4 4 1 4 1"
    />
  </svg>
);
export default SvgCupFour;
