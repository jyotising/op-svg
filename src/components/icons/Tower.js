import * as React from "react";
const SvgTower = (props) => (
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
      d="M15.5 15.5h-7V22h7zM14.5 8.5h-5v7h5zM13.5 2h-3v6.5h3z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22h20"
    />
  </svg>
);
export default SvgTower;
