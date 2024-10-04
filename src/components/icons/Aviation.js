import * as React from "react";
const SvgAviation = (props) => (
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
      d="M16.25 15H18l4-4H5.5a1.5 1.5 0 0 0-.9.3L2 13.25l3.138 1.588a1.5 1.5 0 0 0 .678.162H6.5"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 15.5c0 .828-1.79 1.5-4 1.5v-3c2.21 0 4 .672 4 1.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 9 11 11h7.5L20 6h-1.5z"
    />
  </svg>
);
export default SvgAviation;
