import * as React from "react";
const SvgBatteryEmpty = (props) => (
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
      d="M19 7H3a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1"
    />
    <path fill="#333" d="M21 10h1a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-1z" />
  </svg>
);
export default SvgBatteryEmpty;
