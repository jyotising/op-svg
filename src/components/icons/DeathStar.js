import * as React from "react";
const SvgDeathStar = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M2.5 12.5H22"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M9.5 9.5a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M15.5 15.5h6M17 8.5h4M12.5 18.5h7"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M20 5.999A9.96 9.96 0 0 1 22 12a10 10 0 0 1-5.5 8.933M2.2 10a10.05 10.05 0 0 0 .115 4.5"
    />
  </svg>
);
export default SvgDeathStar;
