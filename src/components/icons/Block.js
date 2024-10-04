import * as React from "react";
const SvgBlock = (props) => (
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
      d="M18 5.5 16.5 4H6l8 8-8 8h10.5l1.5-1.5M3 2.5v19M21 2.5v19"
    />
  </svg>
);
export default SvgBlock;
