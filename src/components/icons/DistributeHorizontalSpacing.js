import * as React from "react";
const SvgDistributeHorizontalSpacing = (props) => (
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
      strokeWidth={2}
      d="M4 21.5v-19M20 21.5v-19"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 7h-4v10h4z"
    />
  </svg>
);
export default SvgDistributeHorizontalSpacing;
