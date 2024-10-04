import * as React from "react";
const SvgReel = (props) => (
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
      d="M15.5 5 7 10M17 8.5l-10 6M17 13l-9.5 6M19.5 2h-15v3h15zM19.5 19h-15v3h15zM7 5v14"
    />
    <path stroke="#333" strokeWidth={2} d="M17 5v14" />
  </svg>
);
export default SvgReel;
