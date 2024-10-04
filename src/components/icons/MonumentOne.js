import * as React from "react";
const SvgMonumentOne = (props) => (
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
      d="M17 19H7v3h10zM9 19l1-14.5L12 2l2 2.5L15 19z"
    />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2 22h20"
    />
  </svg>
);
export default SvgMonumentOne;
