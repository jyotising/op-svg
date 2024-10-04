import * as React from "react";
const SvgDamageMap = (props) => (
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
      d="M2.5 5v14a1 1 0 0 0 1 1H9l-1.5-5.5 3.5-1-.5-3.5 4-2-1-1.5L15 4H3.5a1 1 0 0 0-1 1M21.5 19V5a1 1 0 0 0-1-1H19l-2 3 1.5 2.5-4.5 2 .5 4-3.5 1 1 3.5h8.5a1 1 0 0 0 1-1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.25 9a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgDamageMap;
