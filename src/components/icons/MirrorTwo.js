import * as React from "react";
const SvgMirrorTwo = (props) => (
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
      d="M12 15a6.5 6.5 0 1 0 0-13 6.5 6.5 0 0 0 0 13"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 8.5a9 9 0 1 1-18 0M21 8.5h-2M5 8.5H3M15 22H9M12 22v-4"
    />
  </svg>
);
export default SvgMirrorTwo;
