import * as React from "react";
const SvgCakeFive = (props) => (
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
      d="M4.5 13.5h15L17.156 22H6.844zM19.5 13.5h-15c0-2.75 2.75-4 2.75-4 0-1 1-4 4.75-4s4.75 3 4.75 4c0 0 2.75 1.25 2.75 4"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 13.5h18" />
    <path stroke="#333" strokeWidth={2} d="M14 6a2 2 0 1 0-4 0" />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="m12 4 2-2" />
    <path stroke="#333" strokeWidth={2} d="M10 13.5V22M14 13.5V22" />
  </svg>
);
export default SvgCakeFive;
