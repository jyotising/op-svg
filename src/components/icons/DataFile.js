import * as React from "react";
const SvgDataFile = (props) => (
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
      d="M4 22V2h11.5L20 7.25V22z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 14h-3v3.5h3zM7 17.5h10M13.5 11.5h-3v6h3zM16.5 9h-3v8.5h3z"
    />
  </svg>
);
export default SvgDataFile;
