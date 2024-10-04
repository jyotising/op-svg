import * as React from "react";
const SvgBoxingOne = (props) => (
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
      d="M6.5 13h1a2.5 2.5 0 0 0 0-5h-2A2.5 2.5 0 0 0 3 10.5V15a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3v-2a2 2 0 0 0-2-2h-7M17 22H7a1 1 0 0 1-1-1v-3h12v3c0 .55-.45 1-1 1"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={2}
      strokeWidth={2}
      d="M3 10c-.5 0-1-1-1-2V6c0-2.21 1.79-4 4-4h12c2.21 0 4 1.79 4 4v2c0 1.655-1.345 3-3 3H9.95"
    />
  </svg>
);
export default SvgBoxingOne;
