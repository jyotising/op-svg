import * as React from "react";
const SvgAlignRightOne = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M21 21V3" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 3h8v3H8zM6 10.5h10v3H6zM3 18h13v3H3z"
    />
  </svg>
);
export default SvgAlignRightOne;
