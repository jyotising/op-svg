import * as React from "react";
const SvgSweater = (props) => (
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
      d="M7 18.5H3V12l2.5-7.5 4-2.5h5L19 4.5l2 7.5v6.5h-4V22H7zM17 14v4.5M7 14v4.5"
    />
  </svg>
);
export default SvgSweater;
