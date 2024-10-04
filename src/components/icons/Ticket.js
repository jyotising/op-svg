import * as React from "react";
const SvgTicket = (props) => (
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
      d="M4.5 8 17 3l2 5M2 8h20v3c-1.5 0-3 1-3 2.75S20.5 17 22 17v3H2v-3c1.5 0 3-1 3-3s-1.5-3-3-3z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M8.5 12.692h3M8.5 15.692h7"
    />
  </svg>
);
export default SvgTicket;
