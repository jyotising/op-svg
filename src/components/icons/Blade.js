import * as React from "react";
const SvgBlade = (props) => (
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
      d="M4 7v1.5H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h1V17a1 1 0 0 0 1 1h13.5a1 1 0 0 0 1-1v-1.5H21a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1h-1.5V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1M6 12h12"
    />
    <path fill="#333" d="M12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 14.5v-5M8 14.5v-5"
    />
  </svg>
);
export default SvgBlade;
