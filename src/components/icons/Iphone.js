import * as React from "react";
const SvgIphone = (props) => (
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
      strokeWidth={2}
      d="M17 2H7a1.5 1.5 0 0 0-1.5 1.5v17A1.5 1.5 0 0 0 7 22h10a1.5 1.5 0 0 0 1.5-1.5v-17A1.5 1.5 0 0 0 17 2Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5h2M10 19h4"
    />
  </svg>
);
export default SvgIphone;
