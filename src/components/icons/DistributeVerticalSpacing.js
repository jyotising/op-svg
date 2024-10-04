import * as React from "react";
const SvgDistributeVerticalSpacing = (props) => (
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
      d="M2.5 4h19M2.5 20h19"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 10H7v4h10z"
    />
  </svg>
);
export default SvgDistributeVerticalSpacing;
