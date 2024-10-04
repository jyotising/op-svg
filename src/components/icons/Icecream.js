import * as React from "react";
const SvgIcecream = (props) => (
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
      strokeWidth={2}
      d="M16.5 9h-9l3 11s.5 1.5 1.5 1.5 1.5-1.5 1.5-1.5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M18 9H6c0-4 2.5-7 6-7s6 3 6 7"
    />
  </svg>
);
export default SvgIcecream;
