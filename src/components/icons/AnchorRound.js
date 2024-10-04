import * as React from "react";
const SvgAnchorRound = (props) => (
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
      d="M21 19c0-4.97-4.03-10-9-10s-9 5.03-9 10M10 7H5M19 7h-5M3.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3M20.5 8.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9a2 2 0 1 0 0-4 2 2 0 0 0 0 4"
    />
  </svg>
);
export default SvgAnchorRound;
