import * as React from "react";
const SvgGreenHouse = (props) => (
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
      d="M21 10v12H3V10l9-8z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 12h18M6.5 7v15M17.5 7v15M14 16h-4v6h4z"
    />
  </svg>
);
export default SvgGreenHouse;
