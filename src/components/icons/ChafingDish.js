import * as React from "react";
const SvgChafingDish = (props) => (
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
      d="M12 21a9 9 0 1 1 0-18"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M12 21a9 9 0 1 0 0-18s-2 1-2 4.5 4 5.5 4 9-2 4.5-2 4.5Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 10h1v4h-1M3 10H2v4h1"
    />
  </svg>
);
export default SvgChafingDish;
