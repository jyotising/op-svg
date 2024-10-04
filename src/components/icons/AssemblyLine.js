import * as React from "react";
const SvgAssemblyLine = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeWidth={2} d="M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 19H6.5c-2 0-3.5-1.458-3.5-3.5S4.5 12 6.5 12H10M10 12h7.5c2 0 3.5-1.458 3.5-3.5S19.5 5 17.5 5H10M3 5h3M18 19h3"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M16 21a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </svg>
);
export default SvgAssemblyLine;
