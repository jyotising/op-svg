import * as React from "react";
const SvgBoltOne = (props) => (
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
      d="M6 6.14A.14.14 0 0 1 6.14 6h11.72a.14.14 0 0 1 .14.14V12a6 6 0 0 1-12 0z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 6V2M14 6V2M11 13.5h2M12 18v2.5a1.5 1.5 0 0 0 1.5 1.5H19"
    />
  </svg>
);
export default SvgBoltOne;
