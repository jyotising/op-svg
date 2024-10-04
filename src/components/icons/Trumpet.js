import * as React from "react";
const SvgTrumpet = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path stroke="#333" strokeWidth={2} d="M16 14h3v5.5a1.5 1.5 0 1 1-3 0z" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M14.5 6h5A1.5 1.5 0 0 1 21 7.5v5a1.5 1.5 0 0 1-1.5 1.5H14"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 7H6a3 3 0 0 0 0 6h1"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M7.1 16.5a.1.1 0 0 1-.1-.1V3.1a.1.1 0 0 1 .1-.1h1.65a6.75 6.75 0 0 1 0 13.5z"
    />
  </svg>
);
export default SvgTrumpet;
