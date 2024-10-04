import * as React from "react";
const SvgAlignLeftOne = (props) => (
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
      d="M8 3h8v3H8z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 21V3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10.5h10v3H8zM8 18h13v3H8z"
    />
  </svg>
);
export default SvgAlignLeftOne;
