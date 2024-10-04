import * as React from "react";
const SvgLinkCloud = (props) => (
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
      d="M6.5 16.5c-1.667 0-4.5-.75-4.5-3.75C2 9.25 5.5 8.5 6.5 8.5 7 6.75 8 4 12 4c3.5 0 5 2 5.5 3.75 0 0 4.5.5 4.5 4.75 0 3-2.5 4-4.5 4H11"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13.5 14 11 16.5l2.5 2.5"
    />
  </svg>
);
export default SvgLinkCloud;