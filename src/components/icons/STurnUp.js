import * as React from "react";
const SvgSTurnUp = (props) => (
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
      d="M12 15.5v2c0 2-1.5 3.5-3.5 3.5S5 19.5 5 17.5V8M19 21V6.5c0-2-1.5-3.5-3.5-3.5S12 4.5 12 6.5v9"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.5 18.5 19 21l2.5-2.5"
    />
    <path
      stroke="#333"
      strokeWidth={2}
      d="M5 3a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Z"
    />
  </svg>
);
export default SvgSTurnUp;
