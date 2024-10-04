import * as React from "react";
const SvgChildrenCap = (props) => (
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
      d="M3 16C3 8.5 5.5 4 7 4s3 3 3 3h4s1.5-3 3-3 4 4.5 4 12M21 16H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"
    />
  </svg>
);
export default SvgChildrenCap;
