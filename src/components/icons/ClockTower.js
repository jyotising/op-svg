import * as React from "react";
const SvgClockTower = (props) => (
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
      d="M2 22h20M19.5 16h-6v6h6zM19 5v3M14 5v3M14 5l2.5-3L19 5z"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.5 10h-7a1 1 0 0 0-1 1v11"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M7.5 14.5h2M7.5 18h2"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M20 8h-7a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 .5.5h7a.5.5 0 0 0 .5-.5v-7A.5.5 0 0 0 20 8"
    />
    <path fill="#333" d="M16.5 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M16.5 16v5" />
  </svg>
);
export default SvgClockTower;
