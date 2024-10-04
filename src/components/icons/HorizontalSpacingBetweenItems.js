import * as React from "react";
const SvgHorizontalSpacingBetweenItems = (props) => (
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
      d="M3 20h3V4H3"
    />
    <path stroke="#333" strokeLinecap="round" strokeWidth={2} d="M12 17V7" />
    <path
      stroke="#333"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 20h-3V4h3"
    />
  </svg>
);
export default SvgHorizontalSpacingBetweenItems;
