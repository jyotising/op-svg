import * as React from "react";
const SvgMemoryOne = (props) => (
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
      d="M21.5 14h-19v7h19zM21.5 3h-19v7h19z"
    />
    <path
      fill="#333"
      d="M7.5 6.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M7.5 17.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M11.5 6.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0M11.5 17.5a1 1 0 1 0-2 0 1 1 0 0 0 2 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 6.5h2M15.5 17.5h2"
    />
  </svg>
);
export default SvgMemoryOne;
