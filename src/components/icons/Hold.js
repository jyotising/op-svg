import * as React from "react";
const SvgHold = (props) => (
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
      d="m10 12 3 1s7.5-1.5 8.5-1.5 1 1 0 2-4.5 4-7.5 4S9 16 7 16H2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 10c1-1 3-2.5 5-2.5s6.75 2 7.5 3S13 13 13 13"
    />
  </svg>
);
export default SvgHold;
