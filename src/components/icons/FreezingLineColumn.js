import * as React from "react";
const SvgFreezingLineColumn = (props) => (
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
      d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.062 3 3 7.5M13.001 3 3 12M17.5 3 3 16.5M9.5 15 3 21M20.5 5l-5.878 5.426M9.5 10.5V21M9.5 10.5H21"
    />
  </svg>
);
export default SvgFreezingLineColumn;
