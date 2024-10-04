import * as React from "react";
const SvgShovelOne = (props) => (
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
      d="M5.5 2h13l-1.417 10H6.917z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M10.5 5.5v3M13.5 5.5v3M12 12v10"
    />
  </svg>
);
export default SvgShovelOne;
