import * as React from "react";
const SvgMonitorOne = (props) => (
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
      d="M2.5 4a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.5 13a1 1 0 0 1 1-1h17a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-17a1 1 0 0 1-1-1zM11 6 9 8.5M14 7l-1.5 2"
    />
    <path fill="#333" d="M12 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8.5 17 7 21h10l-1.5-4"
    />
  </svg>
);
export default SvgMonitorOne;
