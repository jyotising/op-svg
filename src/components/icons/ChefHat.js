import * as React from "react";
const SvgChefHat = (props) => (
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
      d="M18 17H6v4h12zM14.5 17v-7M11 17v-4"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6 12.5V17h12v-4.5s2.5-1.5 2.5-4S18.5 5 16 5c0-1-1.5-3-4-3S8 4 8 5C6 5 3.5 6 3.5 8.5s2.5 4 2.5 4"
    />
  </svg>
);
export default SvgChefHat;
