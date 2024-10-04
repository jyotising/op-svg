import * as React from "react";
const SvgTicketsTwo = (props) => (
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
      d="M15 15c1.5 0 2.5.94 2.5 2h3V2h-3c0 1-1 2-2.5 2s-2.5-1-2.5-2h-3v7"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 22h-3c0-1.06-1-2-2.5-2S7 20.94 7 22H4V7h3c0 1 1 2 2.5 2S12 8 12 7h3z"
    />
    <path
      fill="#333"
      d="M7 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M9.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgTicketsTwo;
