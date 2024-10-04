import * as React from "react";
const SvgPot = (props) => (
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
      d="m17 14 5-2M2 14h15l-.22 1.901A3.5 3.5 0 0 1 13.305 19H5.696a3.5 3.5 0 0 1-3.477-3.099zM9.5 5v5M5.5 6v3M13.5 6v3"
    />
  </svg>
);
export default SvgPot;
