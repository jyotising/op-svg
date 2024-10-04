import * as React from "react";
const SvgThermosCup = (props) => (
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
      d="M5 15.5s.036 3 7 3 7-3 7-3v-8H5z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2v3M8 2.5v2M16 2.5v2M7 18v2.5a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V18"
    />
  </svg>
);
export default SvgThermosCup;
