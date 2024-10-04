import * as React from "react";
const SvgRailway = (props) => (
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
      d="M6 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1z"
    />
    <path
      fill="#333"
      d="M9 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2M15 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 10h12M10.5 19h3M9 22h6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="m8.5 16-3 6M15.5 16l3 6"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 7.5v5M6 7.5v5"
    />
  </svg>
);
export default SvgRailway;
