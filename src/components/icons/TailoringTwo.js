import * as React from "react";
const SvgTailoringTwo = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill="#333"
      d="M21 2.5h-2.293a.5.5 0 0 0-.354.854l2.293 2.292a.5.5 0 0 0 .854-.353V3a.5.5 0 0 0-.5-.5M4 21.5h2.293a.5.5 0 0 0 .353-.854l-2.292-2.293a.5.5 0 0 0-.854.354V21a.5.5 0 0 0 .5.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 2v14a1 1 0 0 0 1 1h14"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 6.5h7v7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7 6.5H3M18 21v-4"
    />
  </svg>
);
export default SvgTailoringTwo;
