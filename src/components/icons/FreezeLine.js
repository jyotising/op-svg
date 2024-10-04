import * as React from "react";
const SvgFreezeLine = (props) => (
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
      d="M20 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M3 9.53h18M8.062 3 3 7.5M21 5.003 16 9.5M13.062 3l-7.1 6.312M18.062 3l-7.1 6.312"
    />
  </svg>
);
export default SvgFreezeLine;
