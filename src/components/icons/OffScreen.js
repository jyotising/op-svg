import * as React from "react";
const SvgOffScreen = (props) => (
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
      d="M16.5 3v4.5H21M7.5 3v4.5H3M7.5 21v-4.5H3M16.5 21v-4.5h4.45"
    />
  </svg>
);
export default SvgOffScreen;
