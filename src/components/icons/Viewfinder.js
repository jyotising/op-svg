import * as React from "react";
const SvgViewfinder = (props) => (
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
      d="M8 3H4a1 1 0 0 0-1 1v4M8 21H4a1 1 0 0 1-1-1v-4M16 21h4a1 1 0 0 0 1-1v-4M16 3h4a1 1 0 0 1 1 1v4M6.5 16.5V9h3l1-1.5h3l1 1.5h3v7.5z"
    />
    <path
      stroke="#333"
      strokeMiterlimit={10}
      strokeWidth={2}
      d="M12 14a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </svg>
);
export default SvgViewfinder;
