import * as React from "react";
const SvgShovel = (props) => (
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
      d="M6.5 2h11L17 6.5l-4.25 3h-1.5L7 6.5zM12 9.5V15M13.5 16.5a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 3 0z"
    />
  </svg>
);
export default SvgShovel;
