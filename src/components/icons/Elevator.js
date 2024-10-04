import * as React from "react";
const SvgElevator = (props) => (
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
      d="M21 3.5H3v17h18zM1.5 3.5h21M1.5 20.5h21M12 3.5v17M16.5 10v4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m15 11.5 1.5-1.5 1.5 1.5M7.5 14v-4M6 12.5 7.5 14 9 12.5"
    />
  </svg>
);
export default SvgElevator;
