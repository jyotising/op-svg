import * as React from "react";
const SvgShorts = (props) => (
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
      d="M18.5 3h-13v5L2 16.5 9.5 21l2.5-3 2.5 3 7.5-4.5L18.5 8z"
    />
    <path
      fill="#333"
      d="M5.5 7a1 1 0 1 0 0 2zm13 2a1 1 0 1 0 0-2zm-13 0h13V7h-13z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18.5 7v1l.875 2.125M5.5 7v1l-.875 2.125"
    />
  </svg>
);
export default SvgShorts;
