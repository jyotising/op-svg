import * as React from "react";
const SvgVerticalSpacingBetweenItems = (props) => (
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
      d="M4 3v3h16V3"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M7 12h10" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 21v-3h16v3"
    />
  </svg>
);
export default SvgVerticalSpacingBetweenItems;
