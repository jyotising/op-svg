import * as React from "react";
const SvgMilk = (props) => (
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
      d="M6 9.787a1 1 0 0 1 .152-.53L8.5 5.5h7l2.348 3.757a1 1 0 0 1 .152.53V21a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 16.5V12l2.5 3 2.5-3v4.5M8.5 2h7v3.5h-7z"
    />
  </svg>
);
export default SvgMilk;
