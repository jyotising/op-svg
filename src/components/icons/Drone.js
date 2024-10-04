import * as React from "react";
const SvgDrone = (props) => (
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
      d="m18 18-3.5-3.5M6 6l3.5 3.5zM6 18l3.5-3.5M18 6l-3.5 3.5zM14.5 9.5h-5v5h5zM18 9.5A3.5 3.5 0 1 0 14.5 6M18 14.5a3.5 3.5 0 1 1-3.5 3.5M6 14.5A3.5 3.5 0 1 0 9.5 18M6 9.5A3.5 3.5 0 1 1 9.5 6"
    />
  </svg>
);
export default SvgDrone;
