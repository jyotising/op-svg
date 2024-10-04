import * as React from "react";
const SvgHandbag = (props) => (
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
      d="M7 7a3 3 0 0 1 3-3h4.5a3 3 0 0 1 3 3v1H7zM2 12.5l9.758 2.44a1 1 0 0 0 .485 0L22 12.5V19a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M22 13.5V9a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4.5"
    />
    <path
      fill="#333"
      d="M13.25 11.5a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0"
    />
  </svg>
);
export default SvgHandbag;
