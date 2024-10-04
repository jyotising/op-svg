import * as React from "react";
const SvgTShirt = (props) => (
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
      d="M4.5 4.5 9 2h6l4.5 2.5 2 7.5-4 3v7h-11v-7l-4-3zM6.5 15.5V12M17.5 15.5V12"
    />
  </svg>
);
export default SvgTShirt;
