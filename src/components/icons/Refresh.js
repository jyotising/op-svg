import * as React from "react";
const SvgRefresh = (props) => (
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
      d="M21 4v8M3 12v8M3 12a9 9 0 0 0 15.25 6.476M21 12A9 9 0 0 0 5.524 5.75"
    />
  </svg>
);
export default SvgRefresh;
