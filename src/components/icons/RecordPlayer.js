import * as React from "react";
const SvgRecordPlayer = (props) => (
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
      d="M20.5 4h-17a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.5 4v16"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M14 16.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9Z"
    />
    <path fill="#333" d="M14 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 8h4M2.5 12h4M2.5 16h4"
    />
  </svg>
);
export default SvgRecordPlayer;
