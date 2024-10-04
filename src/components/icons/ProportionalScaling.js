import * as React from "react";
const SvgProportionalScaling = (props) => (
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
      strokeWidth={2}
      d="M11.134 3.5a1 1 0 0 1 1.732 0l8.66 15a1 1 0 0 1-.866 1.5H3.34a1 1 0 0 1-.866-1.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M9.5 20 16 9M16 20l3-5.5"
    />
  </svg>
);
export default SvgProportionalScaling;
