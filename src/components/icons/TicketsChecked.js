import * as React from "react";
const SvgTicketsChecked = (props) => (
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
      d="M17 15v-.505a1.494 1.494 0 0 1 2.989-.003l.006 4.1A3.403 3.403 0 0 1 16.593 22h-3.77a6.97 6.97 0 0 1-5.595-2.818l-2.133-2.879a1.496 1.496 0 0 1 2.26-1.948L8 15V8a1.5 1.5 0 1 1 3 0v5.938-3.425a1.513 1.513 0 1 1 3.026 0V14.5v-.55a1.487 1.487 0 1 1 2.974 0z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M16 2v4" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M8 10H3V8c1 0 2-.75 1.987-2S4 4 3 4V2h18v2c-1 0-1.974.75-1.987 2S20 8 21 8v2h-7"
    />
  </svg>
);
export default SvgTicketsChecked;
