import * as React from "react";
const SvgFormat = (props) => (
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
      d="M20 12H4v9h16zM2 6.5h7V3h6v3.5h7V12H2z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M8 16v5" />
  </svg>
);
export default SvgFormat;
