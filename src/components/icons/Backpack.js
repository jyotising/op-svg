import * as React from "react";
const SvgBackpack = (props) => (
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
      d="M9.5 4.778V2h-3v5M14.5 4.778V2h3v5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M5.5 10a5 5 0 0 1 5-5h3a5 5 0 0 1 5 5v10a2 2 0 0 1-2 2h-9a2 2 0 0 1-2-2zM5.5 14.5h-3v5h3M18.5 14.5h3v5h-3M14 11.5v2M8.5 11.5h7"
    />
  </svg>
);
export default SvgBackpack;
