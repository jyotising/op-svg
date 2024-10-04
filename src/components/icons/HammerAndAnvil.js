import * as React from "react";
const SvgHammerAndAnvil = (props) => (
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
      strokeLinejoin="round"
      strokeWidth={2}
      d="M3 7c0-5 4-5 4-5v10H3zM21 5H7v3h14zM3 15h18s0 4-3 4h-3.5l1 3h-9l1-3H3z"
    />
  </svg>
);
export default SvgHammerAndAnvil;
