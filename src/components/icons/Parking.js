import * as React from "react";
const SvgParking = (props) => (
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
      d="M12 22s8-6 8-12.5C20 5.358 16.418 2 12 2S4 5.358 4 9.5C4 16 12 22 12 22Z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 7v8"
    />
    <path
      stroke="#333"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10.5 7h3a2 2 0 1 1 0 4h-3z"
    />
  </svg>
);
export default SvgParking;
