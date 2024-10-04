import * as React from "react";
const SvgPeopleSafe = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 4.628 12.004 2 21 4.628v5.389C21 15.68 17.375 20.21 12.001 22 6.626 20.21 3 15.68 3 10.014z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 15.5a4 4 0 1 0-8 0"
    />
  </svg>
);
export default SvgPeopleSafe;
