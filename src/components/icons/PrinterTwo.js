import * as React from "react";
const SvgPrinterTwo = (props) => (
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
      d="M19 10V4a1 1 0 0 0-1-1H6a1 1 0 0 0-1 1v6"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M20 10H4a1 1 0 0 0-1 1v9a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-9a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 17h7.5v4H10zM6 13h1.5"
    />
  </svg>
);
export default SvgPrinterTwo;
