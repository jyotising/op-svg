import * as React from "react";
const SvgChildWithPacifier = (props) => (
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
      d="M12 21a8.5 8.5 0 1 0 0-17 8.5 8.5 0 0 0 0 17Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m16.5 10.5-1 .5-1-.5M9.5 10.5l-1 .5-1-.5M12 19v3M12 4c-.125-.5-1-2-3-2M12 4c.042-.5.3-1.6 1-2M15.988 20c0-3 0-4.5-3.988-4.5-4 0-3.988 1.5-3.988 4.5M2.5 11.5v2M21.5 11.5v2"
    />
  </svg>
);
export default SvgChildWithPacifier;
