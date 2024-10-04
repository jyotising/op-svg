import * as React from "react";
const SvgChickenLeg = (props) => (
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
      d="M16.687 16.937c2.121-2.121.707-9.192-2.475-12.374-1.414-1.414-5.48-4.42-9.9 0-4.419 4.42-1.413 8.485 0 9.9 3.183 3.181 10.254 4.595 12.375 2.474"
    />
    <path stroke="#333" strokeWidth={2} d="M20.5 20.5 17 17" />
    <path
      fill="#333"
      d="M20.212 19.152a1.25 1.25 0 1 0 1.768 1.767 1.25 1.25 0 0 0-1.768-1.767"
    />
    <path
      fill="#333"
      d="M19.152 20.212a1.25 1.25 0 1 0 1.767 1.768 1.25 1.25 0 0 0-1.767-1.768M8.5 10a1 1 0 1 0 0-2 1 1 0 0 0 0 2M6 11.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2M8.5 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgChickenLeg;
