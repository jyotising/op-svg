import * as React from "react";
const SvgControl = (props) => (
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
      strokeWidth={2}
      d="M18.5 2h-13a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 18.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 6h1.5M9 9h1.5M13.5 9H15"
    />
  </svg>
);
export default SvgControl;
