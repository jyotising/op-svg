import * as React from "react";
const SvgIntersection = (props) => (
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
      d="M15.5 15.5H20a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H9.5a1 1 0 0 0-1 1v4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 8.5H4a1 1 0 0 0-1 1V20a1 1 0 0 0 1 1h10.5a1 1 0 0 0 1-1v-4.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 8.5h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgIntersection;
