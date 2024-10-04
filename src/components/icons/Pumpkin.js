import * as React from "react";
const SvgPumpkin = (props) => (
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
      strokeWidth={2}
      d="M15.5 7h-7a6.5 6.5 0 0 0 0 13h7a6.5 6.5 0 1 0 0-13Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 20c2.21 0 4-2.91 4-6.5S14.21 7 12 7s-4 2.91-4 6.5S9.79 20 12 20Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 3h-1.5A1.5 1.5 0 0 0 12 4.5V7"
    />
  </svg>
);
export default SvgPumpkin;
