import * as React from "react";
const SvgWindmill = (props) => (
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
      d="m12 11.996-.015-4.998L11.971 2 6 7v5zM12.004 12l4.998-.015L22 11.971 17 6h-5zM12 12.004l.015 4.998.014 4.998L18 17v-5zM11.996 12l-4.998.015L2 12.029 7 18h5z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgWindmill;
