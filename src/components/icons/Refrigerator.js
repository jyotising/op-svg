import * as React from "react";
const SvgRefrigerator = (props) => (
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
      d="M17.5 2h-12a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 11h14M4.5 10v2M18.5 10v2M7.5 14.5v2M7.5 5.5v2M16.5 20v2M6.5 20v2"
    />
  </svg>
);
export default SvgRefrigerator;
