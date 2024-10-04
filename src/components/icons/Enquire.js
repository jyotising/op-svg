import * as React from "react";
const SvgEnquire = (props) => (
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
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M18.5 8a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5ZM6 6a2 2 0 1 1 0-4 2 2 0 0 1 0 4Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m13 19.5 3-2.5v-3c0-1.733 1-3 2.5-3s2.5 1.267 2.5 3v7M12 16.5 9 14v-2c0-1.733-1-3-2.5-3S4 10.267 4 12v9"
    />
  </svg>
);
export default SvgEnquire;
