import * as React from "react";
const SvgBoxing = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M19 18v3a1 1 0 0 1-1 1H8.5a1 1 0 0 1-1-1v-3M5.5 7.5V5a3 3 0 0 1 3-3H19a3 3 0 0 1 3 3v10c0 1.657-1.34 3-2.997 3H7.5C4 18 2 14 2 11.5v-4z"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M5.5 7v4" />
  </svg>
);
export default SvgBoxing;
