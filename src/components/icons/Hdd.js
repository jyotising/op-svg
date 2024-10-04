import * as React from "react";
const SvgHdd = (props) => (
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
      d="M18.5 2h-13a1 1 0 0 0-1 1v18a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1"
    />
    <path
      fill="#333"
      d="M16 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2M16 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 15a4 4 0 1 0-4-4M12 11l-3 3"
    />
  </svg>
);
export default SvgHdd;
