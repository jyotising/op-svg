import * as React from "react";
const SvgVideoFile = (props) => (
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
      d="M7 10.5h6.746v1.75L17 11v5.5l-3.254-1.25V17H7z"
    />
  </svg>
);
export default SvgVideoFile;
