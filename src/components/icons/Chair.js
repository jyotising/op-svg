import * as React from "react";
const SvgChair = (props) => (
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
      d="M10 11.5 6 22M14 11.5 18 22M8 17h8M14.727 11.5H9.273C7.909 11.5 7 10.667 7 9.417V6h2V3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v3h2v3.417c0 1.25-.91 2.083-2.273 2.083M15 6h4M9 6H5"
    />
  </svg>
);
export default SvgChair;
