import * as React from "react";
const SvgMerge = (props) => (
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
      d="m8.364 5.636-5.657 5.657a1 1 0 0 0 0 1.414l6.364 6.364a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414L9.778 5.636a1 1 0 0 0-1.414 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14.364 5.636-5.657 5.657a1 1 0 0 0 0 1.414l5.657 5.657a1 1 0 0 0 1.414 0l5.657-5.657a1 1 0 0 0 0-1.414l-5.657-5.657a1 1 0 0 0-1.414 0"
    />
  </svg>
);
export default SvgMerge;
