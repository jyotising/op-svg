import * as React from "react";
const SvgBreadMachine = (props) => (
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
      d="M3.5 13.5a4 4 0 0 1 4-4h9a4 4 0 0 1 4 4v4a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2zM17 9.5V6c2.5 0 2.5-3.5 0-3.5H7C4.5 2.5 4.5 6 7 6v3.5M11 5.5l-1 1M14 5.5l-1 1"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 16.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 19.5v2M16.5 19.5v2"
    />
  </svg>
);
export default SvgBreadMachine;
