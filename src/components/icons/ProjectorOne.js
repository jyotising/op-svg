import * as React from "react";
const SvgProjectorOne = (props) => (
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
      d="M10.5 10.5V5H5v5.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M21 10.5H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1Z"
    />
    <path fill="#333" d="M9 14.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 14.5h4"
    />
  </svg>
);
export default SvgProjectorOne;
