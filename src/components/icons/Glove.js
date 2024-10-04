import * as React from "react";
const SvgGlove = (props) => (
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
      d="M4 21h13.917v-4S20.5 10.291 21 9s-.25-2.667-2-2.5-3.444 4.165-3.444 4.165S15.25 6.5 15 5.25 14.5 2 9.653 2 4 5.56 4 7.5z"
    />
  </svg>
);
export default SvgGlove;
