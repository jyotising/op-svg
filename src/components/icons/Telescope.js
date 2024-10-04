import * as React from "react";
const SvgTelescope = (props) => (
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
      d="M9 5.5a3 3 0 0 0-6 0v13a3 3 0 1 0 6 0zM21 5.5a3 3 0 1 0-6 0v13a3 3 0 1 0 6 0z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 21.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 21.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 10.5a3 3 0 0 0-6 0M15 15.5a3 3 0 0 0-6 0"
    />
  </svg>
);
export default SvgTelescope;
