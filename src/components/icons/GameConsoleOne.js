import * as React from "react";
const SvgGameConsoleOne = (props) => (
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
      d="M18 2H6a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 6H8v5h8zM8 16h4M10 18v-4"
    />
    <path
      fill="#333"
      d="M15.5 17.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M17 14a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
    />
  </svg>
);
export default SvgGameConsoleOne;
