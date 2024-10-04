import * as React from "react";
const SvgScoreboard = (props) => (
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
      d="M20.5 6h-17A1.5 1.5 0 0 0 2 7.5v11A1.5 1.5 0 0 0 3.5 20h17a1.5 1.5 0 0 0 1.5-1.5v-11A1.5 1.5 0 0 0 20.5 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 3v3M17 3v3M5.113 12 7.5 9.508V16.5M12 6v14"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 16.5c.828 0 1.5-1.567 1.5-3.5s-.672-3.5-1.5-3.5-1.5 1.567-1.5 3.5.672 3.5 1.5 3.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 6h3M10.5 20h3"
    />
  </svg>
);
export default SvgScoreboard;
