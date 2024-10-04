import * as React from "react";
const SvgDiamondThree = (props) => (
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
      d="m2.707 11.293 8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586a1 1 0 0 1 0 1.414l-8.586 8.586a1 1 0 0 1-1.414 0l-8.586-8.586a1 1 0 0 1 0-1.414Z"
    />
  </svg>
);
export default SvgDiamondThree;
