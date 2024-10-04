import * as React from "react";
const SvgTextarea = (props) => (
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
      d="M8 2c3.5 0 4 3 4 4v12c0 1-.5 4-4 4M16 2c-3 0-4 3-4 4v12c0 1 .5 4 4 4M8.5 12h7"
    />
  </svg>
);
export default SvgTextarea;
