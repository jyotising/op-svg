import * as React from "react";
const SvgStretching = (props) => (
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
      d="M11.5 3H4a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1v-7.5"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeWidth={2}
      d="M12 8v4M21 3v4M16 12h-4"
    />
    <path stroke="#333" strokeWidth={2} d="m21 3-9 9" />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M21 3h-4" />
  </svg>
);
export default SvgStretching;
