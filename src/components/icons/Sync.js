import * as React from "react";
const SvgSync = (props) => (
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
      d="M15 3.99 9.5 4v5H2v7h8.5M10 21l5.5-.01v-5.2H22V9h-6.828"
    />
  </svg>
);
export default SvgSync;
