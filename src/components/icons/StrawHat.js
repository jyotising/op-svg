import * as React from "react";
const SvgStrawHat = (props) => (
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
      d="M17 11a5 5 0 0 0-10 0M7 11.5c-2.989.602-5 1.728-5 3.017C2 16.441 6.477 18 12 18s10-1.56 10-3.483c0-1.29-2.011-2.415-5-3.017"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 11c.5.417 2 2 5 2s4.5-1.5 5-2M9.5 12.5l1-2.5"
    />
  </svg>
);
export default SvgStrawHat;
