import * as React from "react";
const SvgCurling = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M19 21H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v4c0 1.66-1.34 3-3 3Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M2 16h20M5 11l3.24-7.4a.99.99 0 0 1 .915-.6h8.595c.965 0 1.75.785 1.75 1.75s-.785 1.75-1.75 1.75H11V11z"
    />
  </svg>
);
export default SvgCurling;
