import * as React from "react";
const SvgFerrisWheel = (props) => (
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
      strokeWidth={2}
      d="M4.5 22 12 11M19.5 22 12 11"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M4.566 12a7.475 7.475 0 0 1 .684-4.273M5.578 14.877A7.5 7.5 0 0 0 10.5 18.35M13.5 18.35a7.5 7.5 0 0 0 4.956-3.53M19.434 12q.065-.49.066-1a7.5 7.5 0 0 0-.75-3.273M13.5 3.65c1.328.27 2.528.89 3.5 1.76M10.5 3.65A7.48 7.48 0 0 0 6.693 5.7"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M5 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM6 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM18 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM19 15a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <path fill="#333" d="M12 13a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 22h4M17 22h4"
    />
  </svg>
);
export default SvgFerrisWheel;
