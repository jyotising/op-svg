import * as React from "react";
const SvgCryingBaby = (props) => (
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
      d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4c-.125-.5-1-2-3-2M12 4c.042-.5.3-1.6 1-2M15.5 17.5s-1-2-3.5-2-3.5 2-3.5 2M17 10l-3-.5M10 9.5 7 10M7.5 10v2.5M16.5 10v2.5M2 12v2M22 12v2"
    />
  </svg>
);
export default SvgCryingBaby;
