import * as React from "react";
const SvgCook = (props) => (
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
      d="M21 18v-8H7v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3M2 10h20M9 4v2M14 3v3M19 4v2"
    />
  </svg>
);
export default SvgCook;
