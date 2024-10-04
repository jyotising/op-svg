import * as React from "react";
const SvgAdjustment = (props) => (
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
      d="M2.5 4A1.5 1.5 0 0 1 4 2.5h16A1.5 1.5 0 0 1 21.5 4v16a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 20zM18 6 6 18M6 8h4M13.5 16.5h4M8 6v4"
    />
  </svg>
);
export default SvgAdjustment;
