import * as React from "react";
const SvgFormula = (props) => (
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
      d="M20 4.5 18.5 3H4l9 9-9 9h14.5l1.5-1.5"
    />
  </svg>
);
export default SvgFormula;
