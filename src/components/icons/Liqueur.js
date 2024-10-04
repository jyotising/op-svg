import * as React from "react";
const SvgLiqueur = (props) => (
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
      d="m11.5 15.5-7.794-9h15.588zM11.5 16v5"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M8.5 22h6" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 11.5h7M17.5 9H19a3 3 0 1 0-2.959-2.5M5.5 8.572l4.268 4.929M17.5 8.571l-4.395 5.075"
    />
  </svg>
);
export default SvgLiqueur;
