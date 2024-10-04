import * as React from "react";
const SvgLinkInterrupt = (props) => (
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
      d="M13.5 7H21a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-2M5.5 7H3a1 1 0 0 0-1 1v7a1 1 0 0 0 1 1h7.5M7 3l10 17M16 11.5h2M6 11.5h2"
    />
  </svg>
);
export default SvgLinkInterrupt;
