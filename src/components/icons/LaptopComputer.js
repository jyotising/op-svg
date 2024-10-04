import * as React from "react";
const SvgLaptopComputer = (props) => (
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
      d="M20.5 4h-17a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 20h20M11 7h2"
    />
  </svg>
);
export default SvgLaptopComputer;
