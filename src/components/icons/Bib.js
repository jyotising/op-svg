import * as React from "react";
const SvgBib = (props) => (
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
      d="M15.5 7c0 4-7 4-7 0 0-2.5 2.5-3 1.5-4.5S4 3.5 4 8v8c0 4.25 4.25 6 7.75 6S20 20.5 20 16V8c0-4.5-5.5-7-6.5-5.5s2 2 2 4.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m9.5 16 2.5-2.5 2.5 2.5-2.5 2.5z"
    />
  </svg>
);
export default SvgBib;
