import * as React from "react";
const SvgSum = (props) => (
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
      d="M9.5 3.5v6h-6a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-6h6a1 1 0 0 0 1-1v-10a1 1 0 0 0-1-1h-10a1 1 0 0 0-1 1"
    />
  </svg>
);
export default SvgSum;
