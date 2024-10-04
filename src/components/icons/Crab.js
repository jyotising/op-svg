import * as React from "react";
const SvgCrab = (props) => (
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
      d="M2.5 8.5C2.5 6 3 1 8.5 3c.473 1.891-1 5.5-6 5.5M21.5 8.5c0-2.5-.5-7.5-6-5.5-.473 1.891 1 5.5 6 5.5M15 11H9a5 5 0 0 0 0 10h6a5 5 0 0 0 0-10M13.5 11V9M10.5 11V9M21.5 8.5c.5 1.5.5 4.5-1.5 6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 8.5c-.5 1.5 0 4 1.5 6M15 21h7l-2-4.5M9 21H2l2-4.5"
    />
  </svg>
);
export default SvgCrab;
