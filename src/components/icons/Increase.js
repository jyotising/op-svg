import * as React from "react";
const SvgIncrease = (props) => (
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
      d="M20.5 12.5a9 9 0 1 1-9-9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 14.25c4.25 0 6-.25 9.5-4.75"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11.5 9.5h4v4M15.5 2.5v2.25M21.75 8.5H19.5M20.445 3.5 18.5 5.445"
    />
  </svg>
);
export default SvgIncrease;
