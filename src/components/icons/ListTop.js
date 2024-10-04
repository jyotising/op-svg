import * as React from "react";
const SvgListTop = (props) => (
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
      d="M4 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM4 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 12h12M10 19h12M10 5h12"
    />
  </svg>
);
export default SvgListTop;
