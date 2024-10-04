import * as React from "react";
const SvgMaster = (props) => (
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
      d="M19 19V3a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v16"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 16H8a3 3 0 1 0 0 6h8a3 3 0 1 0 0-6"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m10 8 2-2 2 2 2-2-1.5 5.5h-5L8 6z"
    />
    <path fill="#333" d="M16 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
  </svg>
);
export default SvgMaster;
