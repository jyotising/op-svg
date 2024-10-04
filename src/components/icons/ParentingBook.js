import * as React from "react";
const SvgParentingBook = (props) => (
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
      d="M19 15.5V22H6.813C4.938 22 4 21 4 18.5V2h6"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M16.5 13a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 9V8M22 9V8M16.5 4c-.083-.5-.6-1.6-2-2M16.5 4c.042-.5.3-1.6 1-2"
    />
    <path
      fill="#333"
      d="M18 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 18h15"
    />
  </svg>
);
export default SvgParentingBook;
