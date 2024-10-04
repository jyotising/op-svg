import * as React from "react";
const SvgInspection = (props) => (
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
      d="M21.5 16.5v-7h-19v11a1 1 0 0 0 1 1H12"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 5a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v4.5h-19z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8 2.5v4M16 2.5v4"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M15 19.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 18.5 3 2.5"
    />
  </svg>
);
export default SvgInspection;
