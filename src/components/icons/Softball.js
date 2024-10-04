import * as React from "react";
const SvgSoftball = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M12 22c5.525 0 10-4.475 10-10S17.525 2 12 2 2 6.475 2 12s4.475 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M5 19c1.85-1.815 3-4.205 3-7 0-2.76-1.19-5.19-3-7M19 19c-1.85-1.815-3-4.205-3-7 0-2.76 1.19-5.19 3-7M14 12h4M6 12h4M15 17l3-1.5M18 8.5 15 7M9 17l-3-1.5M6 8.5 9 7"
    />
  </svg>
);
export default SvgSoftball;
