import * as React from "react";
const SvgLedDiode = (props) => (
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
      d="M3 12a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v3H3zM9.5 15v7M14.5 15v7M12 2a7 7 0 0 0-7 7v2h14V9a7 7 0 0 0-7-7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
  </svg>
);
export default SvgLedDiode;
