import * as React from "react";
const SvgDropbox = (props) => (
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
      d="M12 5 6 9l6 4 6-4z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m12 5 6 4 2.5-3.5L15 2zM12 5 6 9 3.5 5.5 9 2zM21.5 11 18 9l-6 4 3.5 2.5zM2.5 11 6 9l6 4-3.5 2.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 14v4.5L12 22l-6-3.5V14"
    />
  </svg>
);
export default SvgDropbox;
