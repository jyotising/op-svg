import * as React from "react";
const SvgVest = (props) => (
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
      d="M18 2h-2.5L12 12v10h8V9.5l-2-3zM6 2h2.5L12 12v10H4V9.5l2-3z"
    />
  </svg>
);
export default SvgVest;
