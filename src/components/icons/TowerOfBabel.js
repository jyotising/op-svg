import * as React from "react";
const SvgTowerOfBabel = (props) => (
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
      d="M10 7.25V2h4v4.75M7 12.5V7.73L17 6.5v5M5.5 17.5V13l13-1.5V16M20 22H4v-4l16-2z"
    />
  </svg>
);
export default SvgTowerOfBabel;
