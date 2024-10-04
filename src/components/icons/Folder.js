import * as React from "react";
const SvgFolder = (props) => (
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
      d="M3.5 3a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1zM8 14.5h2M8 17.5h5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 2.5S5.882 9 12 9s8-6.5 8-6.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 11a2 2 0 1 0 0-4 2 2 0 0 0 0 4M7.5 2h-3a1 1 0 0 0-1 1v3M16.5 2h3a1 1 0 0 1 1 1v3"
    />
  </svg>
);
export default SvgFolder;
