import * as React from "react";
const SvgRazor = (props) => (
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
      d="M20.5 2.5h-17a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-8a1 1 0 0 0-1-1M7 2.5v10M17 2.5v10M15 2.5h4M2.5 5.5h19M2.5 9.5h19M2.5 10.5v-6M21.5 10.5v-6M5 2.5h4M15 12.5h4M5 12.5h4M16 12.5a4 4 0 1 1-8 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 16-.5 2.5V22M10 16l.5 2.5V22"
    />
  </svg>
);
export default SvgRazor;
