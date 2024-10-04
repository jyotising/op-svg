import * as React from "react";
const SvgBringToFrontOne = (props) => (
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
      d="M7 10.5V17h6.5M10.5 7H17v6.5M2.5 10.5v-8h8v8zM13.5 21.5v-8h8v8z"
    />
  </svg>
);
export default SvgBringToFrontOne;
