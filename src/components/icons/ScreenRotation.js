import * as React from "react";
const SvgScreenRotation = (props) => (
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
      d="M2 12c0 5.523 4.477 10 10 10l-2.5-2.5M22 12c0-5.523-4.477-10-10-10l2.5 2.5M15 20.5 3.5 9 9 3.5 20.5 15z"
    />
  </svg>
);
export default SvgScreenRotation;
