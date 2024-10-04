import * as React from "react";
const SvgVerticallyCentered = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 3.5h18" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16 8H8v8h8z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 20.5h18" />
  </svg>
);
export default SvgVerticallyCentered;
