import * as React from "react";
const SvgChartPieOne = (props) => (
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
      d="M2.5 12a9.5 9.5 0 0 0 9.5 9.5V13a1 1 0 0 1 1-1h8.5a9.5 9.5 0 0 0-19 0"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 15h-6v6h6z"
    />
  </svg>
);
export default SvgChartPieOne;
