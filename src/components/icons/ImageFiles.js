import * as React from "react";
const SvgImageFiles = (props) => (
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
      d="M5 22h14a1 1 0 0 0 1-1V7h-5V2H5a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1M15 2l5 5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 10.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.5 14v4.5h9v-8l-4.755 5.25z"
    />
  </svg>
);
export default SvgImageFiles;
