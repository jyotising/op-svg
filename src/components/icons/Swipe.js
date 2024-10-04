import * as React from "react";
const SvgSwipe = (props) => (
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
      d="m3 7.5 6.686 5.269C10.25 13.25 11.414 14 12.5 13c1.145-1.054.25-2.25 0-2.5l-4-3M2 4h11.5L19 9M4.5 16.5l17.5.01"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4.5 9v11H22V9H11"
    />
  </svg>
);
export default SvgSwipe;
