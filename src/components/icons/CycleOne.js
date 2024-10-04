import * as React from "react";
const SvgCycleOne = (props) => (
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
      d="M3 10q0-6 6-6M20 15q0 6-6 6M14 9a5 5 0 0 1 5-5h2v7h-7zM3 14h7v2a5 5 0 0 1-5 5H3z"
    />
  </svg>
);
export default SvgCycleOne;
