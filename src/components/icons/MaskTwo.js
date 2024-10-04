import * as React from "react";
const SvgMaskTwo = (props) => (
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15.5 2.63A10 10 0 0 0 9 12c0 4.292 2.703 7.952 6.5 9.37M18.5 4.5 9 11M20.5 7l-11 7.5M21.5 10 11 17.5M21.5 14 13 20"
    />
  </svg>
);
export default SvgMaskTwo;
