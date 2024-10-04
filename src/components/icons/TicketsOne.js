import * as React from "react";
const SvgTicketsOne = (props) => (
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
      d="M2.5 9v11a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1h-17a1 1 0 0 0-1 1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 8 16 2.5 18.5 8"
    />
    <path
      fill="#333"
      d="M6.5 12.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 15.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6.5 18.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 17.5h2l5.5-6M12 14.5h3"
    />
  </svg>
);
export default SvgTicketsOne;
