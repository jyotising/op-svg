import * as React from "react";
const SvgMemory = (props) => (
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
      strokeWidth={2}
      d="M4 3v18a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V6.805a1 1 0 0 0-.302-.717L15.79 2.284A1 1 0 0 0 15.094 2H5a1 1 0 0 0-1 1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 10.5H4M20 14.5h-5M20 18h-5M15 22V10.5M9 22V10.5M9 16.5H4"
    />
  </svg>
);
export default SvgMemory;
