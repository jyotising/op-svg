import * as React from "react";
const SvgChartRing = (props) => (
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
      d="M10.488 2.114C5.683 2.842 2 6.99 2 12c0 5.01 3.685 9.16 8.493 9.887a10 10 0 0 0 3.009 0 10.01 10.01 0 0 0 8.386-8.387M21.888 10.497a10.01 10.01 0 0 0-8.384-8.385"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z"
    />
  </svg>
);
export default SvgChartRing;
