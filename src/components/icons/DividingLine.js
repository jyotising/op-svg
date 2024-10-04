import * as React from "react";
const SvgDividingLine = (props) => (
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
      d="M2.5 12h19M10.5 19h3M18.5 19h3M10.5 5h3M2.5 19h3M2.5 5h3M18.5 5h3"
    />
  </svg>
);
export default SvgDividingLine;
