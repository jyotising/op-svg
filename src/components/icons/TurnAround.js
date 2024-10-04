import * as React from "react";
const SvgTurnAround = (props) => (
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
      d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5M13.5 10h-3c-.464 0-.697 0-.892.02a4 4 0 0 0-3.589 3.588C6 13.803 6 14.036 6 14.5h12c0-.464 0-.697-.02-.892a4 4 0 0 0-3.588-3.589C14.197 10 13.964 10 13.5 10"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20.5 13.392c.95.612 1.5 1.334 1.5 2.108 0 2.209-4.477 4-10 4s-10-1.791-10-4c0-.774.55-1.496 1.5-2.108"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.5 17 2.5 2.5L9.5 22"
    />
  </svg>
);
export default SvgTurnAround;
