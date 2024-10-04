import * as React from "react";
const SvgMassageTable = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8.5a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v3H7z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 11.5-6 7M16 11.5l6 7M7 11.5H3M19.5 15.5h-10M3 6.5v5M7 11.5V20M22 11.5V20M4.5 7l-3-1"
    />
  </svg>
);
export default SvgMassageTable;
