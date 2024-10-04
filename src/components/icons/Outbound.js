import * as React from "react";
const SvgOutbound = (props) => (
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
      d="M20 12h-8M17 9l3 3-3 3"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M10 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M20.353 6.5A10 10 0 0 0 19 4.859 9.97 9.97 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10a9.97 9.97 0 0 0 7-2.858q.762-.747 1.353-1.642"
    />
  </svg>
);
export default SvgOutbound;
