import * as React from "react";
const SvgMindMapping = (props) => (
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
      d="M4 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM21 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 3h-6v18h6M6 12h10"
    />
  </svg>
);
export default SvgMindMapping;
