import * as React from "react";
const SvgRoundTrip = (props) => (
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
      d="m4.5 12-2-2s-.7 2.364-.538 3.79C2.124 15.213 3.637 16.286 5 15.5S22 5 22 5l-4.5-1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 6.5-7.601-.808L4 6.5 7.5 10M14.5 22l-2-2.5H21v-2M16 14l2 2.5H9.5v2"
    />
  </svg>
);
export default SvgRoundTrip;
