import * as React from "react";
const SvgHoldInterface = (props) => (
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
      d="m10 16.5 3 1s7.5-1.5 8.5-1.5 1 1 0 2-4.5 4-7.5 4-5-1.5-7-1.5H2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 14.5c1-1 3-2.5 5-2.5s6.75 2 7.5 3-1.5 2.5-1.5 2.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M19.5 7.5h-5a1.5 1.5 0 0 0 0 3h5a1.5 1.5 0 0 0 0-3Z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M13 4.5h8" />
  </svg>
);
export default SvgHoldInterface;
