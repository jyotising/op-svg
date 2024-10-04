import * as React from "react";
const SvgAutoWidthOne = (props) => (
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
      strokeWidth={2}
      d="M3 3.5h18M4 12h16"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M6.995 15 4 12.002 7 9M17.005 9 20 11.998 17 15"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M3 20.5h18" />
  </svg>
);
export default SvgAutoWidthOne;
