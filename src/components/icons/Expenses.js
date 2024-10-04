import * as React from "react";
const SvgExpenses = (props) => (
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
      d="M15.5 17h6M19 19.5l2.5-2.5-2.5-2.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21.5 13V5A1.5 1.5 0 0 0 20 3.5H4A1.5 1.5 0 0 0 2.5 5v14A1.5 1.5 0 0 0 4 20.5h10.235"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m7.5 7.5 2.5 3 2.5-3M7 13.5h6M7 10.5h6M10 10.5v6"
    />
  </svg>
);
export default SvgExpenses;
