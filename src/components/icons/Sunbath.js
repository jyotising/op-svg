import * as React from "react";
const SvgSunbath = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M5.5 18v2" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 18h17M4 15h8M18.5 5.5 17 8"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M17.5 18v2" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 5-7.5 13M19.5 9.5 22 14"
    />
  </svg>
);
export default SvgSunbath;
