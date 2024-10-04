import * as React from "react";
const SvgHat = (props) => (
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
      d="M4.5 8a4 4 0 0 1 4-4h7a4 4 0 0 1 4 4v8h-15zM21 16H3a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1M4.5 11h4M15.5 11h4"
    />
  </svg>
);
export default SvgHat;
