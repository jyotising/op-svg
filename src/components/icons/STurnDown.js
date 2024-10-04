import * as React from "react";
const SvgSTurnDown = (props) => (
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
      d="M12 8.5v-2c0-2 1.5-3.5 3.5-3.5S19 4.5 19 6.5V16M5 3v14.5c0 2 1.5 3.5 3.5 3.5s3.5-1.5 3.5-3.5v-9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7.5 5.5 5 3 2.5 5.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M19 21a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </svg>
);
export default SvgSTurnDown;
