import * as React from "react";
const SvgBatteryCharge = (props) => (
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
      d="M6.5 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3.5M15.5 17H19a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1h-3.5M11.001 7 8.5 12h5.002L11 17"
    />
    <path fill="#333" d="M21 10h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1z" />
  </svg>
);
export default SvgBatteryCharge;
