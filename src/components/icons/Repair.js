import * as React from "react";
const SvgRepair = (props) => (
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
      d="M8.5 7h6M11.5 14V7.5M10.072 21H4a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v4.858M13.5 19l5.25-7.25L21 13.5 15.5 21h-2z"
    />
  </svg>
);
export default SvgRepair;
