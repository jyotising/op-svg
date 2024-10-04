import * as React from "react";
const SvgBus = (props) => (
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
      d="M3.006 17.003V4.018a1 1 0 0 1 1-1H20a1 1 0 0 1 1 1v12.985a1.5 1.5 0 0 1-1.5 1.5h-.998V19a2 2 0 0 1-4 0v-.497H9.504V19a2 2 0 0 1-3.998 0v-.498h-1a1.5 1.5 0 0 1-1.5-1.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 11.5H3M17 6.5H7v5h10zM7 15h1M16 15h1"
    />
  </svg>
);
export default SvgBus;
