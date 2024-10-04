import * as React from "react";
const SvgDigitalWatches = (props) => (
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
      d="M16 6.5H8A1.5 1.5 0 0 0 6.5 8v8A1.5 1.5 0 0 0 8 17.5h8a1.5 1.5 0 0 0 1.5-1.5V8A1.5 1.5 0 0 0 16 6.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 17.5V21a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1v-3.5M9.5 6.5V3a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3.5M17.5 10.5h1M9.5 12h1M13.5 12h1"
    />
  </svg>
);
export default SvgDigitalWatches;
