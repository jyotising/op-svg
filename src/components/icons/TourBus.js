import * as React from "react";
const SvgTourBus = (props) => (
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
      d="M4.5 11.5h15V17a1 1 0 0 1-1 1h-13a1 1 0 0 1-1-1zM4.5 4a1 1 0 0 1 1-1h13a1 1 0 0 1 1 1v7.5h-15z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 21A1.5 1.5 0 0 1 6 19.5V18h3v1.5A1.5 1.5 0 0 1 7.5 21M16.5 21a1.5 1.5 0 0 1-1.5-1.5V18h3v1.5a1.5 1.5 0 0 1-1.5 1.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 6v2M21 6v2"
    />
    <path
      fill="#333"
      d="M7.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16.5 16a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15.5 3 11 8M19 3.5l-2.5 3"
    />
  </svg>
);
export default SvgTourBus;
